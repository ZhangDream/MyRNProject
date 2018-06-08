# MyRNProject
<h5>该项目用来学习RN混合开发，记录学习过程</h5>

V0.0.1(2018-05-28)

初次配置RN环境变量，
初始化一个项目
#参考文献
RN中文网

https://reactnative.cn/docs/0.51/getting-started.html

1.prop属性：大多数组件在创建时就可以使用各种参数来进行定制。用于定制的这些参数就称为props（属性）。

自定义的组件也可以使用props。通过在不同的场景使用不同的属性定制，可以尽量提高自定义组件的复用范畴。只需在render函数中引用this.props，然后按需处理即可。

2.Flex的使用 注意项：

组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器既没有固定的width和height，也没有设定flex，则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的。
3.Flexbox

React Native中使用flexbox规则来指定某个组件的子元素的布局。

Flexbox可以在不同屏幕尺寸上提供一致的布局结构。

一般来说，使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求。

flexDirection:可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。

justifyContent:决定其子元素沿着主轴的排列方式,flex-start、center、flex-end、space-around以及space-between

alignItems:决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。对应的这些可选项有：flex-start、center、flex-end以及stretch

注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。

解释一下stretch:弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。