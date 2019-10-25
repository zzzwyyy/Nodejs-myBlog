//博客列表  
const getList = (author, keyword) => {
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            author: 'zhangsan',
            createTime: 111
        },{
            id: 2,
            title: '标题A',
            content: '内容A',
            author: 'lisi',
            createTime: 22
        }
    ]
}

//博客详情
const getDetail = (id) => {
    //id为要返回博客的id
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            author: 'zhangsan',
            createTime: 111
        }
    ]
}

//新建博客
const newBlog = (blogData = {}) => {
    //blogData是一个博客对象,包含 title content 属性

    console.log('blogdata',blogData)
    return {
        id: 3 //表示新建博客的id，插入到列表的id中
    }
}

//更新博客
const updateBlog = (id, postData = {}) => { 
    //id为要更改的博客的id
    // blogData 是一个博客对象，包含 title content 属性

    return true
}

//删除博客
const delBlog = (id) => {
    //id就是要删除博客的id

    return true
}

module.exports = { 
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}