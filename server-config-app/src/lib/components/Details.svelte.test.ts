import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Details from './Details.svelte';

describe('Feature: Server Details Configuration', () => {
	describe('Scenario: User views the server details section', () => {
		it('They should see a clear indication they are in the details section', async () => {
			// Given: A user wants to configure their Project Zomboid server details
			// When: They navigate to the details configuration section
			render(Details);

			// Then: They should see a clear indication they are in the details section
			const sectionIndicator = page.getByRole('heading', { level: 2 });
			await expect.element(sectionIndicator).toBeInTheDocument();
			await expect.element(sectionIndicator).toHaveTextContent('Details Settings');
		});

        // it('They should see a way to configure the DefaultPort', async () => {
		// 	// Given: A user wants to configure their Project Zomboid server details
		// 	// When: They navigate to the details configuration section
		// 	render(Details);

		// 	// Then: They should see a way to configure the DefaultPort
		// 	const defaultPortInput = page.getByTestId('DefaultPort');
		// 	await expect.element(defaultPortInput).toBeInTheDocument();
		// });
	});
});
