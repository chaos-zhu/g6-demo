import G6 from '@antv/g6'
import data from './data/g6_reverseTree.json'
const minimap = new G6.Minimap({
  size: [100, 100],
  className: 'minimap',
  type: 'delegate',
})
const graph = new G6.Graph({
  container: 'g6_reverseTree',
  width: 1000,
  height: 800,
  plugins: [minimap],
  modes: {
    default: ['drag-canvas', 'zoom-canvas'],
  },
  defaultNode: {
    size: 40,
    style: {
      fill: '#DEE9FF',
      stroke: '#5B8FF9',
    },
  },
  defaultEdge: {
    type: 'cubic-horizontal', // 贝塞尔曲线
    style: {
      stroke: '#F6BD16',
    },
  },
  layout: {
    type: 'dagre',
    rankdir: 'LR',
  }
})
graph.data(data)
graph.render()
graph.fitView()


setTimeout(() => {
  window.scrollTo(0, 2000)
}, 500)