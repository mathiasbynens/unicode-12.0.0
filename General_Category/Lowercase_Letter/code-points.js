module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,154,201,149,236,58,14,68,29,122,139,164,48,219,242,79,251,239,70,199,80,139,132,178,68,6,82,184,164,8,72,172,255,110,254,221,254,187,251,247,126,63,124,30,62,31,62,129,79,226,83,248,52,62,131,207,226,131,126,15,253,30,250,61,244,123,232,247,208,239,161,223,67,191,135,126,15,253,30,250,125,232,247,161,223,135,126,251,254,125,95,224,147,248,20,62,141,207,224,179,248,220,191,47,126,248,160,79,124,248,160,95,160,95,160,95,160,95,160,95,160,95,160,95,162,95,162,95,162,95,162,95,162,95,162,95,162,95,162,79,162,79,161,79,161,79,161,79,161,79,161,79,161,79,193,79,161,189,209,214,56,223,56,215,56,215,56,55,56,55,56,55,56,55,56,55,56,199,107,94,156,91,156,91,156,91,156,59,156,59,156,59,156,3,185,15,220,2,204,2,188,2,172,2,156,2,140,2,124,2,124,2,108,2,92,2,76,2,60,2,44,2,12,2,241,199,199,115,232,139,184,3,49,7,226,13,196,26,136,51,16,99,32,190,64,108,145,56,135,184,2,49,5,226,9,196,18,136,37,16,75,32,150,64,44,129,88,2,177,4,98,9,196,18,136,37,16,75,12,126,99,241,187,139,223,69,44,177,248,109,196,18,136,37,14,231,14,215,129,56,18,99,158,184,254,196,181,39,198,55,113,253,137,107,79,140,103,98,44,19,227,152,184,238,196,117,39,198,45,113,221,137,177,74,140,79,98,108,18,215,155,24,147,196,245,38,198,34,113,205,9,238,137,235,204,134,191,70,91,227,239,70,91,163,255,224,220,224,220,224,220,224,28,152,39,152,39,152,39,174,51,193,60,113,157,137,235,76,48,79,48,79,48,79,92,111,130,121,129,121,225,122,11,188,11,215,92,184,222,194,92,44,204,195,194,53,23,174,185,112,205,133,57,87,152,111,133,107,46,92,115,129,117,129,117,129,117,129,117,129,117,225,218,11,172,11,215,94,184,238,2,235,2,235,2,235,2,235,66,12,5,214,5,214,5,214,133,56,10,188,11,177,20,152,23,226,41,112,47,196,83,96,94,136,167,192,189,16,71,33,142,66,28,133,56,10,113,20,152,23,98,169,131,15,196,83,136,167,192,191,112,11,22,226,106,220,131,141,216,26,227,209,152,83,141,123,176,17,103,227,30,108,196,218,184,7,27,241,54,198,168,17,115,99,142,53,226,110,140,85,35,246,198,92,107,196,223,152,111,13,6,141,57,215,224,208,152,119,13,22,141,49,108,240,104,140,99,131,73,99,14,54,184,52,238,191,6,155,198,152,54,248,52,238,191,6,163,198,248,54,56,53,198,184,193,170,113,255,53,120,53,198,186,193,172,113,255,53,184,53,198,188,193,174,113,15,54,248,53,238,193,6,195,198,61,216,224,216,152,11,13,150,93,232,7,158,93,232,7,166,13,166,141,185,209,224,218,224,218,224,218,224,218,224,218,224,218,224,218,152,43,141,57,221,224,219,152,215,141,57,211,224,220,224,220,152,55,13,214,141,185,211,152,231,141,249,211,152,235,13,246,141,185,222,224,223,139,126,24,131,69,219,226,252,242,59,198,98,49,22,139,177,56,48,60,196,117,136,235,146,223,113,14,113,29,226,58,196,117,136,235,16,215,33,174,67,92,135,184,14,113,29,226,58,196,117,136,235,16,215,33,174,67,92,135,184,14,115,254,16,219,33,182,67,108,135,216,14,177,29,98,59,196,118,136,237,16,219,33,182,67,108,135,216,14,177,29,98,59,196,117,195,85,25,231,17,203,225,154,15,113,220,242,28,52,184,246,227,117,99,254,28,87,111,175,221,92,184,181,106,107,201,214,122,173,5,155,43,246,239,105,105,103,23,46,216,63,174,212,63,46,209,63,174,209,191,225,130,63,108,24,46,249,67,7,163,69,159,94,134,94,134,157,151,157,151,94,150,138,165,98,169,88,42,150,138,85,158,160,98,169,56,42,142,138,163,226,168,56,42,142,138,163,226,168,56,165,22,229,22,38,23,6,163,52,164,60,164,68,164,76,164,84,164,92,164,100,228,108,228,116,68,133,18,146,50,146,82,146,114,146,146,146,178,146,210,18,131,86,82,122,31,251,125,236,242,177,245,99,67,176,33,216,16,108,8,54,4,27,146,13,169,92,199,134,100,67,178,161,216,80,108,104,25,165,65,182,54,91,135,173,4,251,200,244,17,231,35,73,166,67,24,54,16,221,91,101,77,54,144,213,35,166,71,66,143,112,222,41,151,50,145,146,198,71,16,31,25,124,12,255,99,228,31,131,254,24,239,199,40,63,101,94,166,93,230,219,199,100,251,152,105,31,211,236,99,158,125,76,178,143,25,246,49,189,62,230,214,199,196,250,152,85,31,83,42,12,27,24,37,179,233,99,42,125,204,163,143,137,244,49,147,62,166,210,199,92,250,152,76,31,179,233,99,58,125,204,167,143,9,245,49,163,62,166,212,199,156,250,152,84,31,179,234,99,90,125,204,171,143,137,245,49,179,62,166,214,199,220,250,152,92,31,179,235,99,122,125,204,175,143,9,246,49,195,62,166,216,199,28,11,195,6,70,30,28,228,224,248,6,199,55,56,190,193,241,13,142,111,112,62,199,232,219,210,176,31,231,115,240,130,152,30,31,243,227,99,130,132,161,140,243,153,185,18,134,10,94,100,112,62,7,175,148,201,19,134,10,206,231,224,53,51,153,62,102,83,24,42,120,245,201,249,156,12,129,41,22,38,104,146,166,104,154,102,104,150,134,10,206,103,230,95,24,42,24,32,83,49,12,21,143,9,23,14,146,52,96,244,231,208,44,13,211,50,243,55,225,36,43,144,36,161,100,29,146,196,148,33,7,76,235,172,73,146,192,146,149,73,146,90,178,62,73,162,75,86,41,73,126,201,90,37,9,49,89,177,100,40,245,7,21,65,133,170,128,160,34,168,8,42,84,21,4,21,172,13,88,208,100,36,21,44,19,130,117,2,139,27,24,42,88,50,4,107,6,22,57,25,197,126,76,191,188,157,235,41,169,227,234,235,41,181,227,234,139,183,243,124,128,61,156,37,48,75,115,255,38,0,123,56,95,96,62,154,160,201,127,195,210,5,166,104,154,102,104,150,6,50,96,163,121,52,31,77,208,80,17,84,4,21,65,69,80,17,84,36,21,73,69,82,145,84,36,21,73,69,82,145,84,36,21,73,69,81,81,84,20,21,69,69,81,81,84,20,21,69,69,81,81,84,52,21,77,69,83,209,84,52,21,77,69,83,129,251,109,88,210,192,124,52,65,147,52,69,211,52,234,178,52,112,90,188,112,22,60,48,84,240,194,89,247,192,176,51,175,185,120,205,172,129,166,120,205,172,132,96,216,153,215,92,188,102,86,69,48,84,240,154,139,215,204,10,105,138,215,204,58,9,134,10,94,51,203,165,97,189,52,44,152,166,116,205,77,69,83,49,84,12,21,67,197,80,49,84,12,21,67,197,80,129,187,118,152,221,135,169,125,152,215,135,73,29,6,94,250,216,112,108,56,54,112,90,52,103,196,112,50,12,231,193,224,118,129,25,26,54,60,54,60,54,60,54,112,74,205,99,195,199,134,143,13,156,47,195,169,50,156,37,67,206,67,196,67,186,67,176,67,166,67,156,67,146,67,146,67,136,67,126,67,116,67,106,67,96,67,86,67,76,67,66,67,56,67,46,67,36,67,26,67,16,67,6,195,240,135,145,207,176,129,145,15,35,31,70,62,140,124,24,249,48,242,97,228,195,200,135,145,15,35,95,70,190,140,124,25,249,50,242,101,228,203,200,151,145,47,35,95,70,190,140,124,25,249,50,242,101,228,203,200,151,145,47,239,143,101,248,203,105,182,100,176,156,102,75,16,203,105,182,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,177,164,193,74,110,88,202,193,176,129,52,150,52,88,214,13,107,58,24,54,144,198,146,198,145,198,145,198,145,198,145,198,145,198,145,198,145,198,145,198,145,198,145,198,145,198,145,198,145,198,145,198,145,198,17,196,145,193,49,252,99,248,199,240,143,119,217,145,1,171,201,97,57,57,172,39,135,5,229,176,98,28,150,140,195,154,113,88,52,14,171,198,97,217,56,172,7,135,5,225,176,34,28,150,132,195,154,112,88,20,14,171,66,24,42,150,223,86,223,168,101,228,183,212,50,252,59,106,89,218,254,176,18,46,107,66,152,143,38,104,146,166,96,176,138,194,12,205,210,28,204,71,197,71,197,71,197,71,69,240,91,232,27,181,65,109,80,27,212,6,181,65,109,242,91,242,91,209,75,209,75,81,91,212,22,181,69,109,81,91,212,22,21,69,69,83,209,84,52,251,53,251,53,251,53,251,53,251,53,251,13,251,13,251,45,191,173,190,241,55,88,210,179,12,93,150,161,203,50,116,89,134,46,203,203,101,121,185,44,47,151,229,229,178,188,92,150,151,203,242,114,89,94,46,243,204,50,207,44,243,204,50,207,44,243,204,178,98,92,86,140,139,162,6,38,168,13,106,201,229,17,9,235,196,125,201,111,169,111,236,135,41,143,91,139,157,9,226,49,192,215,250,70,89,243,135,24,42,139,69,24,42,24,234,27,254,218,240,215,24,224,99,108,44,17,151,41,97,153,3,150,57,96,185,232,47,159,133,183,24,12,159,130,97,150,6,218,226,53,243,233,119,139,3,202,103,96,24,252,70,177,216,121,225,119,54,170,145,67,69,178,106,167,23,42,147,85,66,189,80,161,172,74,234,177,50,120,46,168,30,107,131,231,186,234,177,58,120,46,175,30,235,131,231,42,235,177,66,160,149,54,164,253,171,169,165,117,105,29,210,186,194,14,105,93,104,135,180,170,183,89,45,208,74,155,210,170,250,102,197,64,43,109,74,171,90,60,82,90,149,228,172,32,104,165,45,105,203,37,189,180,37,109,73,91,210,150,180,173,254,42,224,163,213,218,58,63,242,54,242,163,2,94,181,163,139,71,23,142,174,28,93,58,186,118,116,241,232,234,209,85,162,43,68,87,135,174,12,93,21,186,34,116,53,232,74,208,85,160,43,64,87,127,174,252,94,106,116,82,227,146,26,145,212,88,164,70,33,197,63,69,62,195,143,43,106,21,231,20,225,244,179,140,31,102,252,52,227,199,25,63,207,136,94,138,91,150,159,117,212,42,74,172,73,96,69,41,245,172,147,98,149,122,218,73,61,238,164,158,119,82,15,60,57,126,80,82,171,136,165,30,122,82,172,82,148,82,124,82,15,62,169,39,159,100,89,253,74,15,129,245,243,119,246,41,205,195,82,212,165,121,88,138,189,52,15,75,4,74,243,176,62,247,95,89,61,162,105,30,86,248,73,77,90,145,41,205,195,18,159,210,60,44,81,42,205,195,18,171,210,60,44,17,43,205,195,18,183,210,60,44,209,43,205,195,18,195,210,60,44,63,26,106,30,150,159,16,53,15,75,84,75,243,176,196,182,52,15,75,132,75,132,89,41,97,68,251,201,134,172,207,140,44,223,197,177,94,162,85,235,168,117,212,58,106,93,181,174,90,87,173,171,214,85,235,169,245,212,122,106,61,181,30,91,249,238,137,54,100,217,202,183,69,180,35,171,62,161,62,161,62,161,214,80,107,168,53,213,154,106,77,181,166,90,83,173,197,214,209,245,140,174,103,116,61,163,235,25,93,207,232,122,70,215,131,124,37,251,100,67,182,100,71,86,125,158,90,159,90,159,90,159,90,245,222,114,245,230,146,101,13,173,90,21,203,42,150,85,44,171,88,86,177,172,98,89,197,178,138,101,21,203,42,150,85,44,171,88,86,177,176,162,161,85,107,169,181,212,170,17,92,141,224,106,4,151,239,62,191,213,56,46,223,129,126,171,209,220,81,140,26,211,229,59,81,216,148,85,127,141,233,106,76,87,99,186,26,211,21,67,190,195,162,85,255,243,25,246,63,113,59,113,59,113,59,113,59,113,59,113,59,113,59,113,59,113,59,113,59,113,59,113,59,191,235,21,159,19,159,11,159,81,31,241,57,241,225,91,50,60,72,241,61,50,22,197,148,45,89,189,33,214,227,227,234,249,81,228,99,245,4,41,254,177,122,134,212,40,196,234,41,82,99,17,235,183,203,122,144,92,61,73,106,92,176,208,74,171,135,201,213,211,164,198,8,86,90,61,80,174,158,40,53,94,176,210,234,241,114,245,124,169,177,131,149,182,164,45,105,75,218,146,182,164,45,105,75,218,150,182,165,109,105,91,218,150,182,165,109,105,71,173,163,214,81,235,168,117,220,42,207,35,207,35,207,171,239,171,239,167,95,57,253,202,201,207,201,207,201,207,201,207,201,207,201,207,73,203,113,15,141,123,104,220,97,63,217,144,77,217,146,109,217,145,93,89,105,245,222,64,179,34,78,111,14,52,55,96,165,213,203,131,211,219,3,205,19,88,105,245,2,225,244,6,65,115,6,86,90,189,68,56,205,132,211,76,56,205,4,205,40,88,105,53,19,78,51,225,52,19,78,51,65,243,13,86,90,205,132,211,76,208,220,139,211,76,208,12,140,211,76,208,60,140,211,76,208,108,140,211,76,56,205,132,211,76,240,252,60,205,132,211,76,56,205,132,211,76,56,205,132,211,76,56,205,132,211,76,56,205,132,211,76,56,205,132,211,76,56,205,132,211,76,56,205,132,211,76,56,205,132,211,76,56,205,4,190,237,109,46,220,178,254,190,178,124,155,142,69,86,86,111,212,249,30,60,249,190,140,86,253,71,253,71,253,249,134,187,88,249,208,182,236,200,174,172,90,245,214,61,244,222,61,252,230,93,239,222,67,111,223,67,239,223,67,111,224,67,239,224,67,111,225,185,143,4,219,210,182,180,45,109,75,219,210,182,180,45,109,75,219,210,182,180,124,67,223,218,187,104,237,94,180,246,47,90,59,24,173,61,140,214,46,70,107,31,163,181,147,209,218,203,104,237,102,180,246,51,90,59,26,173,61,141,214,174,70,107,95,163,181,179,209,218,219,104,237,110,180,246,55,90,59,28,173,61,142,214,46,71,107,159,163,181,211,209,218,235,104,237,118,180,246,59,90,59,30,173,61,143,214,174,71,107,223,163,181,243,209,218,251,104,237,126,180,246,63,90,59,32,173,61,144,214,46,72,107,31,164,181,19,210,51,218,167,224,24,193,174,172,206,115,31,162,249,196,78,251,201,134,108,202,150,172,180,43,237,74,187,210,158,180,39,237,73,123,210,158,180,39,237,73,123,210,158,180,220,57,234,21,255,21,255,21,255,21,255,21,255,21,255,21,255,21,255,21,255,21,255,21,127,102,210,94,249,89,249,89,249,89,249,89,249,89,249,89,249,89,249,89,249,89,249,89,249,217,63,63,79,218,39,237,147,246,73,251,164,125,210,62,105,159,180,159,180,159,180,159,180,159,180,159,180,159,180,159,180,159,180,159,180,159,180,33,109,72,27,210,134,180,33,109,72,27,210,134,180,33,109,72,155,210,166,180,41,109,74,155,210,166,180,41,109,74,155,210,166,180,124,69,246,184,218,211,134,108,202,150,108,203,142,236,202,30,237,74,197,183,24,176,210,174,180,43,237,74,187,210,174,180,43,237,74,123,210,158,180,39,237,73,123,210,158,180,39,237,73,123,210,242,37,200,99,118,160,125,178,159,108,252,195,170,10,63,180,254,158,178,37,219,178,35,187,178,7,203,25,66,251,100,63,217,144,77,217,146,109,217,145,93,89,105,159,180,79,218,39,237,147,246,73,251,164,125,210,62,105,159,180,79,218,79,218,79,218,79,90,61,5,220,170,148,191,85,45,127,171,98,254,86,213,252,173,202,249,91,213,243,183,42,232,111,85,209,223,170,164,191,77,123,73,123,73,123,73,123,73,123,73,123,73,123,41,123,41,123,41,123,41,123,41,123,41,123,41,123,41,123,41,123,41,123,89,183,173,219,214,109,222,6,226,48,235,224,95,56,255,194,217,181,183,134,56,202,58,88,126,150,235,209,242,78,79,80,119,122,196,188,211,147,212,157,30,53,239,180,157,118,167,71,206,59,109,169,221,253,188,211,164,109,181,187,159,189,60,123,121,246,98,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,103,144,204,198,58,216,75,219,75,219,139,65,158,65,158,65,222,253,181,217,245,223,46,155,9,158,183,219,248,6,77,135,231,195,231,67,248,80,62,180,15,227,195,250,96,249,179,252,89,254,44,127,150,243,197,11,15,246,146,110,75,183,165,219,242,175,205,191,144,254,133,244,47,164,127,161,252,11,229,95,40,123,41,123,41,123,41,123,41,123,41,123,41,123,41,123,105,123,105,123,105,123,105,123,105,123,105,123,105,123,105,123,57,183,157,219,206,109,247,215,230,95,248,219,183,52,200,103,144,207,32,159,65,106,103,151,135,242,161,125,24,31,214,7,123,49,207,103,158,207,60,159,121,62,243,124,230,169,29,95,30,236,229,217,139,255,31,233,153,231,51,207,103,158,207,60,159,121,62,243,124,230,249,204,243,153,231,51,207,103,158,207,60,159,121,62,243,124,230,249,204,243,153,231,51,207,103,158,207,60,159,121,62,243,124,109,47,109,47,99,47,99,47,230,249,183,15,252,153,231,223,134,240,103,158,127,59,195,159,121,254,109,17,127,230,249,183,87,252,153,167,55,141,127,159,121,122,247,24,7,123,49,207,207,60,189,159,140,131,189,152,167,247,151,113,176,151,207,94,62,123,249,236,229,179,23,243,244,222,241,239,51,79,111,34,255,62,243,244,110,242,239,51,79,111,43,255,62,243,244,254,242,239,51,79,111,52,255,62,243,244,142,51,14,246,98,158,159,121,122,15,26,7,123,49,207,207,60,189,43,141,131,189,140,189,140,189,104,159,250,23,230,25,230,25,230,25,191,191,182,246,97,124,88,31,244,11,97,158,97,158,97,158,97,158,97,158,97,158,97,158,97,158,97,158,97,158,97,158,97,158,97,158,97,158,122,229,202,131,189,124,246,242,217,139,121,134,121,134,121,70,253,181,249,23,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,204,51,254,120,142,189,140,189,140,189,232,63,1,126,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,105,158,249,217,203,103,47,97,47,97,47,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,230,153,127,60,215,94,214,94,214,94,214,94,214,94,244,79,23,200,25,233,195,223,95,237,195,248,176,62,200,103,153,96,153,96,153,96,153,96,153,96,153,96,153,96,153,96,153,96,153,96,153,96,153,160,94,194,242,96,47,97,47,97,47,97,47,97,47,97,47,105,121,90,238,132,89,78,152,229,132,89,78,152,101,116,101,116,101,116,53,127,109,118,109,116,101,116,101,116,101,116,101,116,101,116,101,116,101,116,245,135,110,237,101,237,101,237,101,237,229,236,229,236,229,236,229,236,197,9,179,156,48,203,9,179,188,178,151,87,246,246,202,222,94,217,219,43,81,123,37,106,19,108,19,108,19,236,248,107,75,31,202,135,246,97,124,88,31,252,11,6,217,6,217,6,217,6,217,6,217,6,217,206,148,237,76,217,206,148,237,76,217,94,217,219,43,123,123,101,111,175,236,237,149,168,189,4,181,151,160,246,45,211,190,101,218,183,76,251,150,105,19,108,19,108,19,108,19,108,19,108,19,108,19,108,19,108,19,108,151,28,109,144,109,144,99,144,99,144,99,144,99,144,227,37,125,254,254,139,202,75,208,120,9,26,47,65,227,37,104,188,4,141,151,160,241,18,52,190,115,198,119,206,248,206,25,223,57,227,59,103,124,231,140,9,142,9,142,9,142,9,142,9,142,9,142,9,142,9,142,9,142,215,242,49,200,49,200,49,200,49,200,49,200,49,200,241,218,51,94,123,198,107,207,120,237,25,175,61,227,181,103,188,246,140,215,158,241,218,51,190,115,198,119,206,248,206,25,223,57,227,59,103,124,231,140,110,153,114,37,80,174,4,202,149,64,185,18,40,87,2,229,74,160,252,79,104,245,105,157,40,255,55,90,125,90,39,202,255,150,86,223,103,47,97,47,97,47,97,47,97,47,97,47,97,47,97,47,97,47,97,47,97,47,105,47,105,47,105,47,105,47,105,47,105,47,105,47,105,47,105,47,254,151,55,215,47,56,188,255,253,31,52,50,9,253,36,47,0,0])))