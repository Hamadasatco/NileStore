import { Link } from "react-router-dom";


export class CategoryNavigator extends React.Component {

    render(){
        return <React.Fragment>
            <link className="btn btn-secondary btn-block" to={this.props.baseUrl}>
                All
            </link>
        { this.props.categories && this.props.categories.map(cat =>
            <link className="btn btn-secondary btn-block" key={ cat }
            to={`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                { cat }
            </link>)}
        </React.Fragment>
    }
}