'use server';

/**
 * @fileOverview An AI agent for matching clients with suitable freelancers.
 *
 * - aiFreelancerMatch - A function that takes project requirements and returns a list of suitable freelancers.
 * - AiFreelancerMatchInput - The input type for the aiFreelancerMatch function.
 * - AiFreelancerMatchOutput - The return type for the aiFreelancerMatch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiFreelancerMatchInputSchema = z.object({
  projectRequirements: z
    .string()
    .describe('A detailed description of the project requirements.'),
});
export type AiFreelancerMatchInput = z.infer<typeof AiFreelancerMatchInputSchema>;

const AiFreelancerMatchOutputSchema = z.object({
  freelancerMatches: z.array(
    z.object({
      name: z.string().describe('The name of the freelancer.'),
      skills: z.array(z.string()).describe('The skills of the freelancer.'),
      experience: z.string().describe('The experience of the freelancer.'),
      rate: z.number().describe('The hourly rate of the freelancer.'),
      matchScore: z
        .number()
        .describe('A score indicating how well the freelancer matches the project requirements.'),
    })
  ).describe('A list of freelancers that match the project requirements.'),
});
export type AiFreelancerMatchOutput = z.infer<typeof AiFreelancerMatchOutputSchema>;

export async function aiFreelancerMatch(input: AiFreelancerMatchInput): Promise<AiFreelancerMatchOutput> {
  return aiFreelancerMatchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiFreelancerMatchPrompt',
  input: {schema: AiFreelancerMatchInputSchema},
  output: {schema: AiFreelancerMatchOutputSchema},
  prompt: `You are an AI assistant that matches clients with suitable freelancers.

You will receive a detailed description of the project requirements. Your task is to analyze these requirements and suggest the best-suited freelancers from your database.

Consider the freelancer's skills, experience, and hourly rates to determine the best match.

Project Requirements: {{{projectRequirements}}}

Output a list of freelancers with their name, skills, experience, rate, and a match score indicating how well they fit the project requirements. 

Ensure the output is a valid JSON object.`,
});

const aiFreelancerMatchFlow = ai.defineFlow(
  {
    name: 'aiFreelancerMatchFlow',
    inputSchema: AiFreelancerMatchInputSchema,
    outputSchema: AiFreelancerMatchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
