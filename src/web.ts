import { WebPlugin } from '@capacitor/core';

import type { webeventPlugin } from './definitions';

export class webeventWeb extends WebPlugin implements webeventPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
