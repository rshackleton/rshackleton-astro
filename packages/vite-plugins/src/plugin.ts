import camelcase from 'camelcase';
import type { PluginContext } from 'rollup';
import type { ComponentMapConfig, ComponentMapModule } from './types';

export { ComponentMapConfig, ComponentMapModule };

export default function componentMapPlugin(components: ComponentMapConfig) {
  const virtualModuleId = 'virtual:component-map';
  const resolvedVirtualModuleId = virtualModuleId;

  return {
    name: 'vite-plugin-component-map',
    async resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    async load(this: PluginContext, id: string) {
      if (id === resolvedVirtualModuleId) {
        const imports: string[] = [];

        for await (const [key, value] of Object.entries(components)) {
          const resolved = await this.resolve('/src/' + value);

          if (resolved) {
            imports.push(`import ${camelcase(key)} from "${resolved.id}"`);
          }
        }

        return `${imports.join(';')};export default {${Object.keys(components)
          .map((key) => camelcase(key))
          .join(',')}}`;
      }
    },
  };
}
