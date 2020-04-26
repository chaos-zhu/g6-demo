import G6 from '@antv/g6'
import data from './data/g6_tree_data.json'
// 实例化 minimap 插件
const minimap = new G6.Minimap({
  size: [100, 100],
  className: 'minimap',
  type: 'delegate',
})
const graph = new G6.TreeGraph({
  container: 'g6_tree',
  width: 1000,
  height: 700,
  plugins: [minimap],
  modes: {
    default: [ 'drag-canvas', 'zoom-canvas', ],
  },
  defaultNode: {
    size: 26,
    style: {
      fill: '#C6E5FF',
      stroke: '#5B8FF9',
    },
  },
  defaultEdge: {
    type: 'cubic-horizontal',
    style: {
      stroke: '#F6BD16',
    },
  },
  layout: {
    type: 'compactBox',
    direction: 'LR',
    getId: function getId(d) {
      return d.id
    },
    getHeight: function getHeight() {
      return 16
    },
    getWidth: function getWidth() {
      return 16
    },
    getVGap: function getVGap() {
      return 10
    },
    getHGap: function getHGap() {
      return 100
    },
  },
})

graph.node(function (node) {
  return {
    label: node.id,
    labelCfg: {
      offset: 10,
      position: node.children && node.children.length > 0 ? 'left' : 'right',
    },
  }
})

graph.data(data)
graph.render()
graph.fitView()