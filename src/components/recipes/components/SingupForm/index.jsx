import { useForm } from "react-hook-form";

const SingupForm = () => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm();

    const handleClearclick = () => {
       reset();
    };

    const handleSubmitForm = (data) =>{
        //evt.preventDefault(); // Funcion usada para que el submit no actualice la pagina.
        console.log(data);
    };


    return(
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Name:
                <input {...register('name',{required:true})}/>
            </label>
            <label>
                Age:
                <input {...register('age',{required:true})}/>
            </label>
            <label>
                Address:
                <input {...register('address',{required:true})}/>
            </label>
            <label>
                Zipcode:
                <input {...register('zipcode',{required:true})}/>
            </label>
            <label>
                Phone:
                <input {...register('phone',{required:true})}/>
            </label>
            <br/>
            <div>
                <button type="button" onClick={handleClearclick}>Clear</button>
                <button type="submit" >Save</button>
            </div>
        </form>
    );
};

export default SingupForm;