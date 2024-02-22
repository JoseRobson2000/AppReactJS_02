import CustomLamp from "components/CustomLamp";

export default function home(){
  return(
    <div className="Container-fluid">
      <div className="row">

            <div className="col-4"> 
              <CustomLamp/>
            </div>

            <div className="col-4">
            <CustomLamp/>
            </div>

            <div className="col-4">
            <CustomLamp/>
            </div>

      </div>
    </div>
  )
}