import {
  type ArgumentMetadata,
  Injectable,
  type PipeTransform,
} from '@nestjs/common';

@Injectable()
export class StringToLowerCasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return typeof value === 'string' ? value.toLocaleLowerCase() : value;
  }
}
