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

		it('They should see a way to configure if the server is Public', async () => {
			// Given: A user wants to configure their Project Zomboid server details
			// When: They navigate to the details configuration section
			render(Details);

			// Then: They should see a way to configure the PublicDescription
			const input = page.getByTestId('Public');
			await expect.element(input).toBeInTheDocument();
		});

		it('They should see a way to configure the Password', async () => {
			// Given: A user wants to configure their Project Zomboid server details
			// When: They navigate to the details configuration section
			render(Details);

			// Then: They should see a way to configure the Password
			const input = page.getByTestId('Password');
			await expect.element(input).toBeInTheDocument();
		});

		it('They should see a way to configure if the server should pause when empty', async () => {
			// Given: A user wants to configure their Project Zomboid server details
			// When: They navigate to the details configuration section
			render(Details);

			// Then: They should see a way to configure if the server should pause when empty
			const input = page.getByTestId('PauseEmpty');
			await expect.element(input).toBeInTheDocument();
		});

		it('They should see a way to configure the ResetID', async () => {
			// Given: A user wants to configure their Project Zomboid server details
			// When: They navigate to the details configuration section
			render(Details);

			// Then: They should see a way to configure the ResetID
			const input = page.getByTestId('ResetID');
			await expect.element(input).toBeInTheDocument();
		});
	});
});
