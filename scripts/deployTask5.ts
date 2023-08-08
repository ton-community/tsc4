import { toNano } from 'ton-core';
import { Task5 } from '../wrappers/Task5';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const task5 = provider.open(Task5.createFromConfig({}, await compile('Task5')));

    await task5.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(task5.address);

    // run methods on `task5`
}
