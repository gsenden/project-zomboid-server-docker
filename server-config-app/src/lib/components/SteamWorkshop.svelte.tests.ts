import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Steam from './SteamWorkshop.svelte';

describe('Feature: SteamWorkshop Configuration', () => {
	describe('Scenario: User views the SteamWorkshop section', () => {
        // it('They should see a way to configure the UDPPort', async () => {
		// 	// Given: A user wants to configure their Project Zomboid Steam details
		// 	// When: They navigate to the Steam configuration section
		// 	render(Steam);

		// 	// Then: They should see a way to configure the UDPPort
		// 	const udpPortInput = page.getByTestId('UDPPort');
		// 	await expect.element(udpPortInput).toBeInTheDocument();
		// });

    });
});