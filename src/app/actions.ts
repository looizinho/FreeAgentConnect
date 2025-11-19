'use server';

import { z } from 'zod';
import { freelancers as allFreelancers } from '@/components/landing/freelancers-section';

// Schema for contact form validation
const contactSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  // Return errors if validation fails
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Erro de validação.',
      success: false,
    };
  }

  // Simulate sending data
  console.log('Contact Form Data:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    success: true,
  };
}


// AI Matcher Action
const aiMatcherSchema = z.object({
  requirements: z.string().min(20, { message: "Descreva seu projeto com pelo menos 20 caracteres." }),
});

interface AiMatcherState {
    message?: string | null;
    freelancers?: typeof allFreelancers | null;
    success: boolean;
    errors?: {
      requirements?: string[];
    }
}

export async function matchFreelancersAction(
  prevState: AiMatcherState,
  formData: FormData
): Promise<AiMatcherState> {
  const validatedFields = aiMatcherSchema.safeParse({
    requirements: formData.get('requirements'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Por favor, corrija os erros no formulário.',
      success: false,
    };
  }

  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate AI matching logic
  const keywords = ['react', 'node', 'designer', 'writer', 'marketing', 'artist'];
  const requirementsText = validatedFields.data.requirements.toLowerCase();
  
  const matched = allFreelancers.filter(f => 
    f.skills.some(skill => requirementsText.includes(skill.toLowerCase())) ||
    keywords.some(keyword => requirementsText.includes(keyword))
  );

  // If no specific skills match, return a random subset
  if (matched.length === 0) {
    const shuffled = [...allFreelancers].sort(() => 0.5 - Math.random());
    const randomSelection = shuffled.slice(0, 3);
    return {
      message: "Não encontramos uma correspondência exata, mas aqui estão algumas sugestões:",
      freelancers: randomSelection,
      success: true,
    }
  }

  return {
    message: "Encontramos os freelancers perfeitos para você!",
    freelancers: matched,
    success: true,
  };
}
