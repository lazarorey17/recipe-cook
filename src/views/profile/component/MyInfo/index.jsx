

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const USER_DATA = "userData";

const MyInfo = ()=>{
    const {handleSubmit, register, setValue} = useForm();

    const handleFormSutmit = (data)=>{
        try {
            localStorage.setItem(USER_DATA,JSON.stringify(data));
            alert('User updated!!');
        } catch (error) {
            alert('Ha ocurrido un error!!');
        }
    }

    useEffect(()=>{
        try {
            const userData = JSON.parse(localStorage.getItem(USER_DATA)) || [];

            setValue('name', userData?.name);
            setValue('email', userData?.email);
            setValue('age', userData?.age);
        } catch (error) {
            console.log(error);
        }
    },[]);

    return(
        <Stack gap={3} className="col-md-5 mx-auto">
            <Form onSubmit={handleSubmit(handleFormSutmit)}>
                <Form.Group className="mb-3" controlId="ControlInputName">
                    <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Full name" {...register('name', {require:true, minLength:1, maxLength:120})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInputEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" {...register('email', {require:true, minLength:1, maxLength:200})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ControlInputAge">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Age" {...register('age', {require:true, min:1, max:120, valueAsNumber:true})} />
                </Form.Group>
                <Button variant="primary">Save</Button>{' '}
            </Form>
        </Stack>
        
        
        /*<form onSubmit={handleSubmit(handleFormSutmit)} className={styles.form}>
            <label className={styles.label}>
                Name:
                <input {...register('name', {require:true, minLength:1, maxLength:120})} className={styles.input}/>
            </label>
            <label className={styles.label}>
                Email:
                <input {...register('email', {require:true, minLength:1, maxLength:200})} className={styles.input}/>
            </label>
            <label className={styles.label}>
                Age:
                <input {...register('age', {require:true, min:1, max:120, valueAsNumber:true})} className={styles.input} type="number"/>
            </label>
            <button type="submit" className={styles.submitBtn}>Save</button>
        </form>*/
    );
};

export default MyInfo;