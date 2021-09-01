import React from 'react';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import SelectedBeast from './component/SelectedBeast';
import data from './component/Hornedbeast.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
// import unicorn from './image/unicorn.jpg'

class App extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            //   total: 15 ,
            visible: false,
            selected: {}
        }
    }

    viewModal = (title) => {
        let selArr = data.filter((element) => {

            return (element.title === title);


        })
        this.setState({
            visible: true,
            selected: selArr[0],
        });

        return selArr;
    }

    handleClose = () => {
        this.setState({ visible: !this.state.visible })

    }



    render() {
        return (
            <div>
                <Header />

                <Main 
                selected={this.state.selected}
                viewModal={this.viewModal}
                
                
                
                />
                <SelectedBeast
                handleClose={this.handleClose}
                visible={this.state.visible}
                selected={this.state.selected}
                />
                <Footer />



            </div>

        );
    }
}

export default App;



// <>
// <div>
//   <Header />
//   {/* <h3>total : {this.state.total}</h3> */}

//     {data.map(item => {
//       return (

//         <Main HornedData={data}
//           title={item.title}
//           imgUrl={item.image_url}
//           description={item.description}
//           sendMethodTotalToMain = {this.calTotal}
//           showModel = {this.show}

//         />
//         <SelectedBeast/>

//       )
//     })}

//   <Footer />
//   </div>
// </>