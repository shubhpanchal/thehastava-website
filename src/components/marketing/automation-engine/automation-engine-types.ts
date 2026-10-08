export type NodeType = "trigger" | "ai" | "data" | "logic" | "action" | "output";

export type NodeStatus = "idle" | "ready" | "processing" | "success" | "error" | "skipped";

export type EngineState = "idle" | "running" | "paused" | "error" | "completed";

export type ExecutionSpeed = "1x" | "2x" | "step";

export interface NodeIOField {
  label: string;
  value: string;
  type?: "string" | "number" | "currency" | "status" | "entity" | "score";
}

export interface DecisionConfig {
  threshold: number;
  evaluatedValue: number;
  operator: ">=" | "<=" | "==";
  yesTargetNodeId: string;
  noTargetNodeId: string;
  conditionLabel: string;
}

export interface WorkflowNode {
  id: string;
  type: NodeType;
  label: string;
  sublabel: string;
  category: string;
  iconName: string;
  position: { x: number; y: number }; // Relative percentage (0 to 100) on canvas
  status: NodeStatus;
  isOptional?: boolean;
  isEnabled?: boolean;
  executionTimeMs: number;
  badge?: string;
  inputs: NodeIOField[];
  outputs: NodeIOField[];
  processDescription: string;
  techStack: string;
  livePayload?: Record<string, string | number | boolean>;
  decisionConfig?: DecisionConfig;
  errorMessage?: string;
}

export interface WorkflowConnection {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  label?: string;
  status: "inactive" | "active" | "completed" | "skipped";
  branchType?: "default" | "yes" | "no";
}

export interface WorkflowScenario {
  id: "sales" | "operations" | "support";
  title: string;
  subtitle: string;
  badge: string;
  category: string;
  description: string;
  triggerEvent: string;
  nodes: WorkflowNode[];
  connections: WorkflowConnection[];
  executionSequence: string[][]; // stages of node IDs that execute in order
  simulatedOutcome: {
    headline: string;
    summary: string;
    beforeManual: {
      duration: string;
      steps: string[];
      friction: string;
    };
    afterAutomated: {
      duration: string;
      steps: string[];
      outcome: string;
    };
    keyMetrics: { label: string; value: string }[];
  };
}
