import G6 from '@antv/g6'
import data from './data/g6_topology_data.json'
// 实例化 minimap 插件
const minimap = new G6.Minimap({
    size: [100, 100],
    className: 'minimap',
    type: 'delegate',
})
// 实例化 grid 插件
const grid = new G6.Grid()
const graph = new G6.Graph({
    container: 'g6_topology', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
    width: 800, // Number，必须，图的宽度
    height: 500, // Number，必须，图的高度
    // renderer:'svg',
    plugins: [minimap], // 将 minimap 实例配置到图上
    fitView: false,
    animate: true,
    layout: {
       type: 'radial',
       preventOverlap: true, // 阻止重叠
       linkDistance: 200, // 指定边距离
    },
    modes: {
        default: ['zoom-canvas', 'drag-canvas', 'drag-node', 
            {
                type: 'tooltip', // 提示框
                formatText(model) {
                return model.label
                },
            }
        ],
    },
    nodeStateStyles: {
        // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
        hover: {
          fill: 'lightsteelblue',
        },
        // 鼠标点击节点，即 click 状态为 true 时的样式
        click: {
          stroke: '#000',
          lineWidth: 3,
        },
      },
      // 边不同状态下的样式集合
      edgeStateStyles: {
        // 鼠标点击边，即 click 状态为 true 时的样式
        click: {
          stroke: 'steelblue',
        },
      }
    
})

graph.data(data)
graph.render() // 渲染
 let flag = false
graph.on('node:click', e => {
    flag = !flag
    const nodeItem = e.item // 获取鼠标进入的节点元素对象
    console.log(e)
    graph.setItemState(nodeItem, 'hover', flag) // 设置当前节点的 hover 状态为 true
})

