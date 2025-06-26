import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Steam from './Steam.svelte';

describe('Feature: Steam Configuration', () => {
	describe('Scenario: User views the Steam section', () => {
        it('They should see a way to configure the UDPPort', async () => {
			// Given: A user wants to configure their Project Zomboid Steam details
			// When: They navigate to the Steam configuration section
			render(Steam);

			// Then: They should see a way to configure the UDPPort
			const udpPortInput = page.getByTestId('UDPPort');
			await expect.element(udpPortInput).toBeInTheDocument();
		});

        it('They should see a way to configure the MaxAccountsPerUser', async () => {
			// Given: A user wants to configure their Project Zomboid Steam details
			// When: They navigate to the Steam configuration section
			render(Steam);

			// Then: They should see a way to configure the MaxAccountsPerUser
			const maxAccountsInput = page.getByTestId('MaxAccountsPerUser');
			await expect.element(maxAccountsInput).toBeInTheDocument();
		});

        it('They should see a way to configure to use the SteamScoreBoard', async () => {
			// Given: A user wants to configure their Project Zomboid Steam details
			// When: They navigate to the Steam configuration section
			render(Steam);

			// Then: They should see a way to configure the SteamScoreBoard
			const steamScoreBoardInput = page.getByTestId('SteamScoreBoard');
			await expect.element(steamScoreBoardInput).toBeInTheDocument();
		});
    });
});