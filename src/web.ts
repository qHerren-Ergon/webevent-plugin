import {WebPlugin} from '@capacitor/core';

import type { webeventPlugin } from './definitions';

export class webeventWeb extends WebPlugin implements webeventPlugin {
  async eventSender(): Promise<void> {
    this.notifyListeners("sendEvent", { value: "event 1"}, true);
    return Promise.resolve();
  }

  async eventSenderWithTimer(): Promise<void> {
    setTimeout(() => this.notifyListeners("sendEvent", { value: "event 2"}, true), 5000);
    return Promise.resolve();
  }
}
