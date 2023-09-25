import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

@Injectable()
export class YamlConfigService {
  getConfig(): Record<string, any> {
    console.log('test');
    const yamlConfig = fs.readFileSync('/config/config.yaml', 'utf8');
    console.log('test');
    return yaml.load(yamlConfig);
  }
}
