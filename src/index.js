    import './style.css';
    import './blue.less';
    import fj from "./images/fj.jpg";
    import dengta from "./images/dengta.jpg";

    //在node.js中需要使用js来写html结构
    var div = document.createElement("div");
    div.innerHTML = `
        <div class="red">学习webpack开发项目</div> 
        <div class="blue"><span>这是用less设置的样式</span></div> 
        <div><img src="${fj}"/></div>  
        <div><img src="${dengta}"/></div>  
    `
    document.body.appendChild(div);