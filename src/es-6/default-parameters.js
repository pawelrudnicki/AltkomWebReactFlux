function callMyGrandpa(name, phoneNo, device = 'Samsung') {
    console.log(`Grab ${device} dial +48${phoneNo} call ${name}`);
}

callMyGrandpa('Józef', '601-284-212');
callMyGrandpa('Staszek', '0000-1202917');
callMyGrandpa('Zbyszek', '601-284-212');
callMyGrandpa('Antoni', '601-284-212', 'iPhone');