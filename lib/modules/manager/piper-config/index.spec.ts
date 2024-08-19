import { Fixtures } from '../../../../test/fixtures';
import { partial } from '../../../../test/util';
import { extractPackageFile } from '../index';
import type { ExtractConfig } from '../types';

const piperConfigSimple = Fixtures.get('simple.yaml');

const config = partial<ExtractConfig>({});

const packageFile = 'config.yaml';

describe('modules/manager/piper-config/index', () => {
  describe('extractPackageFile()', () => {
    it('returns null for invalid yaml file content', () => {
      const result = extractPackageFile(
        'piper-config',
        'nothing here: [',
        packageFile,
        config,
      );
      expect(result).toBeNull();
    });

    it('returns null for empty yaml file content', () => {
      const result = extractPackageFile(
        'piper-config',
        '',
        packageFile,
        config,
      );
      expect(result).toBeNull();
    });

    it('extracts from config.yaml correctly', () => {
      const result = extractPackageFile(
        'piper-config',
        piperConfigSimple,
        packageFile,
        config,
      );
      expect(result).toMatchObject({
        deps: [
          {
            currentValue: '3.9.6',
            datasource: 'docker',
            depName: 'maven',
          },
          {
            currentValue: '8-jdk17-alpine',
            datasource: 'docker',
            depName: 'gradle',
          },
          {
            currentValue: '11',
            datasource: 'docker',
            depName: 'openjdk',
          },
          {
            currentValue: '0.0.2',
            datasource: 'docker',
            depName: 'docker.io/paketobuildpacks/build-noble-base',
          },
          {
            currentValue: '0.0.2',
            datasource: 'docker',
            depName: 'index.docker.io/paketobuildpacks/run-noble-base',
          },
        ],
      });
    });
  });
});
