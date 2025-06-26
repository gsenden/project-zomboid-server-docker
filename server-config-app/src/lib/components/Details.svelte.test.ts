import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Details from './Details.svelte';

describe('Feature: Server Details Configuration', () => {
	describe('Scenario: User views the server details section', () => {
        it('They should see a way to configure the DefaultPort', async () => {
			// Given: A user wants to configure their Project Zomboid server details
			// When: They navigate to the details configuration section
			render(Details);

			// Then: They should see a way to configure the DefaultPort
			const defaultPortInput = page.getByTestId('DefaultPort');
			await expect.element(defaultPortInput).toBeInTheDocument();
		});

		it('They should see a way to configure the PublicName', async () => {
			// Given: A user wants to configure their Project Zomboid server details
			// When: They navigate to the details configuration section
			render(Details);

			// Then: They should see a way to configure the PublicName
			const publicNameInput = page.getByTestId('PublicName');
			await expect.element(publicNameInput).toBeInTheDocument();
		});

		it('They should see a way to configure the PublicDescription', async () => {
			// Given: A user wants to configure their Project Zomboid server details
			// When: They navigate to the details configuration section
			render(Details);

			// Then: They should see a way to configure the PublicDescription
			const publicDescriptionInput = page.getByTestId('PublicDescription');
			await expect.element(publicDescriptionInput).toBeInTheDocument();
		});
	});
});
