function callMyGrandpa(name, phoneNo, device = 'Samsung') {
    console.log(`Grab ${device} dial ${phoneNo} call ${name}`);
}

callMyGrandpa('Józef', '+48 601-284-212');
callMyGrandpa('Staszek', '0000-1202917');
callMyGrandpa('Zbyszek', '+48 601-284-212');
callMyGrandpa('Antoni', '+48 601-284-212', 'iPhone');