function extractFile(str){
    let text = str.split('\\').pop();
    let lastIndex = text.lastIndexOf('.');

    let fileName = text.slice(0, lastIndex);
    let extension = text.slice(lastIndex + 1);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

    
}
// extractFile('C:\\Internal\\training-internal\\Template.pptx.bg');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');