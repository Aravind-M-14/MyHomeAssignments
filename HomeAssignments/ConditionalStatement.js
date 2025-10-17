//Decides which browser to launch using if-else statements.

let broswerName = "Edge"
if(broswerName=="chrome"){
    console.log("Launching chrome browser")
    
}
else{
    console.log("launching default broswer")
}

//Chooses which set of tests to run using a switch statement

let testType = "Functional"

switch(testType){
    case "smoke" :
        console.log("Running smoke test")
        break;
        case "sanity":
            console.log("Running sanity test")
           break;
            case "regression":
                console.log("Running regression test")
            break;
            default:
                console.log("Running default smoke test")
                break;
  }