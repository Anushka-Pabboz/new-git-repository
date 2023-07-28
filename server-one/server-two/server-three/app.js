const express = require('express');
const app = express();
const PORT = 3333;

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'hii this message is from server three'
        
    })
});

app.listen(PORT, () => {
    console.log(`server one is running on port ${PORT},`);
    
})