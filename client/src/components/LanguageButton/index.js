import React, { Component } from 'react';
import "./Language.css";
import API from "../../utils/languagesAPI"
// import 'react-dropdown/style.css';
// // import translateText from "../../translate.js"; 
// const request = require('request');
// const uuidv4 = require('uuid/v4');

// // If you want to set your subscription key as a string, replace the value for
// // the Ocp-Apim-Subscription-Key header as a string. */
// const subscriptionKey="aa4b796d586a40bc9e33ba503ea1d3c4";
// if (!subscriptionKey) {
//   throw new Error('Environment variable for your subscription key is not set.')
// };




class LanguageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLanguagesArray: [],
        };
        console.log(this.state.value)
    }

    componentDidMount() {
        API.getLanguagesAll()
            .then(res => {
                const buttonLanguagesArray = res.data;
                this.setState({ buttonLanguagesArray });
                console.log(buttonLanguagesArray);
            })
            .catch(err => { console.log("error:", err) })
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        });
        console.log(event.target.value)
    };

    render() {
        const { buttonLanguagesArray } = this.state;

        let buttonLanguagesArrayList = buttonLanguagesArray.length >= 0
            && buttonLanguagesArray.map((item, i) => {
                return (
                    <option key={i} value={item.languageCode}>{item.language}</option>
                )
            }, this);

        return (
            <div>
                <select onChange={this.handleChange}> 
                    {buttonLanguagesArrayList}
                </select>
            </div>
        );
    }
}


// function LanguageButton (props) {
//     return (
//         <div>

//             <div className="dropdown">
//                 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Language
//                 </button>
//                 <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
//                     <button  
//                     className="dropdown-item"
//                     type="button" 
//                     value={props.language_code}
//                     onClick={()=> {console.log("lang onclick:" + JSON.stringify(props)); props.handleClick(props.value)}}
//                     >
//                     {props.language}
//                     </button>)}

//                 </div>
//             </div>
//         </div>
//     )
//     }
//     state = {
//         buttonLanguagesArray: [],
//         language_codeClicked: "",
//     }

//     componentDidMount() {
//         // this.translateText = translateText.bind(this);
//         API.getLanguagesAll()
//             .then(res => {
//                 const buttonLanguagesArray = res.data;
//                 this.setState({ buttonLanguagesArray })
//             })
//             .catch(err => { console.log("error:", err) })
//     }

//     handleClick = value => {
//         console.log.bind("clicked value:" + value);
//         let lang = this.state.
//         }

//      translateText = () => {
//         // var test =document.getElementsByTagName()
//         // console.log(val)
//         // var val=elem.value
//           let options = {
//               method: 'POST',
//               baseUrl: 'https://api.cognitive.microsofttranslator.com/',
//               url: 'translate',
//               qs: {
//                 'api-version': '3.0',
//                 'to': this.value
//               },
//               headers: {
//                 'Ocp-Apim-Subscription-Key': subscriptionKey,
//                 'Content-type': 'application/json',
//                 'X-ClientTraceId': uuidv4().toString()
//               },
//               body: [{
//                     'text': 'Hello World!'
//               }],
//               json: true,
//           };

//           request(options, function(err, res, body){
//               console.log(JSON.stringify(body, null, 4));
//           });
//       };


//     render() {
//         return (
//             <div>

//                 <div className="dropdown">
//                     <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         Language
//                     </button>
//                     <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
//                         {this.state.buttonLanguagesArray.map((buttonLanguage, index) => <button onClick={()=> this.translateText(this.value)} className="dropdown-item" type="button" key={index} value={buttonLanguage.language_code}>{buttonLanguage.language}</button>)}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default LanguageButton;