import React from 'react'
import { TextField, Box, Container, Stack, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form'
const ContactForm = () => {
    const { 
        register,
        handleSubmit,
        formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data);

    return (
        <Container maxWidth='xs'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box mb={2}>
                    <TextField
                        label="Full Name"
                        variant="filled"
                        {...register('fullName', { required: true })}
                        error={!!errors?.fullName}
                    />
                    {errors?.fullName && <p style={{color:'darkred'}}>Full name is required.</p>}
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Email"
                        variant="filled"
                        {...register('email', { required: true })}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Contact Number"
                        {...register('contactNumber', { required: true })}
                        variant="filled"
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        label="Message"
                        variant="filled"
                        multiline
                        fullWidth
                        rows={4}
                        {...register('message', { required: true })}

                    />
                </Box>
                <Box mb={2}>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />} fullWidth>
                        Send Message
                    </Button>
                </Box>

            </form>
        </Container>
    )
}

export default ContactForm
