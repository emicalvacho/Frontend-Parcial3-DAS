import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceParams, ResourceRequestBodyType, ResourceRequestMethod, ResourceResponseBodyType } from '@ngx-resource/core';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../models/i-usuario';
import { IValidar } from '../models/i-validar';

@Injectable({
  providedIn: 'root'
})
@ResourceParams({
  pathPrefix: `${environment.apiUrl}/`
})
export class UsuariosResourceService extends Resource{

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Text
  })
  validar: IResourceMethodObservable<IValidar, string>

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    requestBodyType: ResourceRequestBodyType.JSON,
    responseBodyType: ResourceResponseBodyType.Json
  })
  getUsuario: IResourceMethodObservable<string, IUsuario>
}
