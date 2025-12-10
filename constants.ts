import { AlgorithmType, NodeState, EdgeState } from './types';

export const COLORS = {
  [NodeState.DEFAULT]: 'fill-slate-100 stroke-slate-400',
  [NodeState.PROCESSING]: 'fill-yellow-200 stroke-yellow-500',
  [NodeState.COMMITTED]: 'fill-green-200 stroke-green-500',
  [NodeState.VISITED]: 'fill-blue-100 stroke-blue-400',
};

export const EDGE_COLORS = {
  [EdgeState.DEFAULT]: 'stroke-slate-400',
  [EdgeState.TRAVERSED]: 'stroke-green-500',
  [EdgeState.REJECTED]: 'stroke-red-400',
  [EdgeState.WARNING]: 'stroke-orange-400',
};

export const ALGORITHMS = [
  { value: 'BFS', label: 'Duyệt theo chiều rộng (BFS)' },
  { value: 'DFS', label: 'Duyệt theo chiều sâu (DFS)' },
  { value: 'DIJKSTRA', label: 'Đường đi ngắn nhất (Dijkstra)' },
  { value: 'PRIM', label: 'Cây khung nhỏ nhất (Prim)' },
  { value: 'KRUSKAL', label: 'Cây khung nhỏ nhất (Kruskal)' },
  { value: 'FORD_FULKERSON', label: 'Luồng cực đại (Ford-Fulkerson)' },
  { value: 'FLEURY', label: 'Chu trình Euler (Fleury)' },
  { value: 'HIERHOLZER', label: 'Chu trình Euler (Hierholzer)' },
  { value: 'BIPARTITE', label: 'Kiểm tra Đồ thị 2 phía' },
];

// Mock Data for initial setup
export const INITIAL_NODES = [
  { id: 'A', x: 200, y: 150, state: NodeState.DEFAULT },
  { id: 'B', x: 400, y: 100, state: NodeState.DEFAULT },
  { id: 'C', x: 300, y: 300, state: NodeState.DEFAULT },
  { id: 'D', x: 500, y: 250, state: NodeState.DEFAULT },
  { id: 'E', x: 150, y: 350, state: NodeState.DEFAULT },
];

export const INITIAL_EDGES = [
  { id: 'e1', source: 'A', target: 'B', weight: 4, state: EdgeState.DEFAULT },
  { id: 'e2', source: 'A', target: 'C', weight: 2, state: EdgeState.DEFAULT },
  { id: 'e3', source: 'B', target: 'C', weight: 1, state: EdgeState.DEFAULT },
  { id: 'e4', source: 'B', target: 'D', weight: 5, state: EdgeState.DEFAULT },
  { id: 'e5', source: 'C', target: 'D', weight: 8, state: EdgeState.DEFAULT },
  { id: 'e6', source: 'C', target: 'E', weight: 10, state: EdgeState.DEFAULT },
  { id: 'e7', source: 'E', target: 'D', weight: 2, state: EdgeState.DEFAULT },
];