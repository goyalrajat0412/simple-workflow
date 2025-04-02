/**
 * Interface for node data passed between nodes
 */
export interface INodeExecutionData {
  json: IDataObject;
  binary?: IBinaryData;
  pairedItem?: IPairedItem;
}

/**
 * A generic object with string as keys and any type as values
 */
export interface IDataObject {
  [key: string]: any;
}

/**
 * Interface for binary data
 */
export interface IBinaryData {
  [key: string]: {
    data: string;
    mimeType: string;
    fileName?: string;
    fileSize?: number;
  };
}

/**
 * Interface to track which item is paired with which input
 */
export interface IPairedItem {
  item: number;
  input?: number;
}

/**
 * Basic node definition
 */
export interface INode {
  id: string;
  name: string;
  type: string;
  typeVersion: number;
  parameters: INodeParameters;
  position: [number, number];
  disabled?: boolean;
}

/**
 * Node parameters as used by the nodes
 */
export interface INodeParameters {
  [key: string]: any;
}

/**
 * Node property definition
 */
export interface INodeProperty {
  displayName: string;
  name: string;
  type: 'string' | 'number' | 'boolean' | 'options' | 'collection';
  default?: any;
  description?: string;
  required?: boolean;
  options?: INodePropertyOptions[];
}

/**
 * Options for the node property of type 'options'
 */
export interface INodePropertyOptions {
  name: string;
  value: string | number | boolean;
  description?: string;
}

/**
 * The connection definition between nodes
 */
export interface IConnection {
  sourceNodeId: string;
  targetNodeId: string;
  sourceOutput: string;
  targetInput: string;
}

/**
 * Definition of a complete workflow
 */
export interface IWorkflow {
  id: string;
  name: string;
  nodes: INode[];
  connections: IConnection[];
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Interface for NodeType classes
 */
export interface INodeType {
  description: INodeTypeDescription;
  execute(workflow: IWorkflowExecuteData): Promise<INodeExecutionData[][] | null>;
}

/**
 * The node type description
 */
export interface INodeTypeDescription {
  displayName: string;
  name: string;
  group: string[];
  version: number;
  description: string;
  defaults: {
    name: string;
    color: string;
  };
  inputs: string[];
  outputs: string[];
  properties: INodeProperty[];
}

/**
 * Data when executing a workflow
 */
export interface IWorkflowExecuteData {
  workflowData: IWorkflow;
  startNode?: string;
  inputData?: INodeExecutionData[];
}

/**
 * The execution result
 */
export interface IExecutionResult {
  finished: boolean;
  data: {
    [key: string]: INodeExecutionData[][];
  };
  error?: Error;
}
