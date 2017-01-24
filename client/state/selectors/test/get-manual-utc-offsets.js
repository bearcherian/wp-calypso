/**
 * External dependencies
 */
import { expect } from 'chai';

/**
 * Internal dependencies
 */
import { getManualUTCOffsets } from '../';
import { MANUAL_UTC_OFFSETS } from 'state/timezones/test/fixture';

describe( 'getManualUTCOffsets()', () => {
	it( 'should return null if `timezones` aren\'t synced', () => {
		const state = {
			timezones: {
				items: {},
				requesting: null
			}
		};

		const manualUTCOffsets = getManualUTCOffsets( state, 2916285 );

		expect( manualUTCOffsets ).to.be.null;
	} );

	it( 'should return manual utc offset data', () => {
		const state = {
			timezones: {
				items: {
					manual_utc_offsets: MANUAL_UTC_OFFSETS
				}
			}
		};

		const offsets = getManualUTCOffsets( state );

		expect( offsets ).to.eql( MANUAL_UTC_OFFSETS );
	} );
} );
