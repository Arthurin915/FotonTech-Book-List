require('dotenv').config()
import server from './server'

server.listen(process.env.PORT, () => {
    console.log('Server running at port:', process.env.PORT)
})