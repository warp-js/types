export interface IPageConfiguration{

}

export type PageConfiguration = IPageConfiguration;

export interface IPageBlock<OutputBlockData = any>{
  id:string;
  type:string;
  data:OutputBlockData
}

export type PageBlock<OutputBlockData = any> = IPageBlock<OutputBlockData>;

export interface IPageContent{
  blocks:PageBlock[];
  time:number;
  version:string;
}

export type PageContent = IPageContent;

export interface IPage<OutputData = { blocks : Record<string,any>[] }>{
  type:string;
  id:string;
  _id?:string;
  name:string;
  content:OutputData;
  configuration:PageConfiguration;
}

export class _page implements IPage{

  type:string = '';
  id:string = '';
  name:string = '';
  content = { 
    blocks : []
  };
  configuration:PageConfiguration = {

  };

  constructor( options:Partial< Page > = {} ){
    Object.assign( this , options )
  }

  static init( options?:Partial<Page> ){
    return new _page( options )
  }

}

export type Page<OutputData = any> = IPage<OutputData> & _page;