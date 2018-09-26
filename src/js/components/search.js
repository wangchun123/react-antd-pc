import React from 'react';
import {Input} from 'antd';

const Search = Input.Search;

class search extends React.Component{
    
    search=(e)=>{
        this.props.search(e);
    }

    render(){
        return(
            <div>
                <Search placeholder="请输入用户"
                          enterButton="查询"
                          onSearch={this.search}>
                </Search>
            </div>
        )
    }
}
export default search;