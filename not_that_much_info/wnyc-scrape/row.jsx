//KILLED BY TRAFFIC

var myDocument = app.documents.add();
with(myDocument.documentPreferences){
  pageHeight = "360p0";
  pageWidth = "120p0";
  facingPages = false;
  pageOrientation = PageOrientation.portrait;

}

var names = ["Amaury Paulino","Jean Bonne-Annee","Raquel Calleja","Roger Pariente","Denise Lippin","Unidentified man","Joan Hale","Ignascio Andal","Gloria Ramiro","Unidentified woman","Blima Friedman","Ray Abeyta","Unidentified man","Unknown","Shan Zheng","Jason Aitcheson","Robert Perry","Mohammed Hoque","Mohammad Uddin","Unknown","Unknown","Latchman Singh","Jenna Daniels","Unidentified woman","Julian Mendez Porres","Unknown","Francine Feathler","Kevin Lewis","Edmund Chou","Melvina Hibbert","Unknown","Unidentified man","Unknown","Unknown","Anthony Ledic","Milenka Ledic","Unidentified man","Alex Davis","Unidentified man","Edgar Torres","Unidentified man","Unknown","Florence Bello","Unidentified","Rylee Ramos","Martin Srodin","Winnifred Matthias","Unidentified","Jose Chevere","Jalissa Otero","Sau Ying Lee","Paul Rodriguez","Unidentified","Anna Maria Moström","Unknown","Christina Alonso","Unidentified male","Unidentified male","Unidentified male","David Malave","Doohee Cho","Rony Mejia","Sui Leung","Douglas Kaplan","David Duran","Michael Williams","Jill Tarlov","D'John Arias","Karim Carter","Unidentified male","Unidentified female","Unidentified male","Unidentified male","Unidentified male","Unidentified female","Xavier Rodriguez","Bill Bido","Melania Ward","Unidentified female","Unknown","Unidentified male","Unidentified male","Keiko Ohnishi","Douglas Matrullo","Unknown","Unknown","Unidentified male","Unidentified male","Unidentified","Silvia Gallo","Menachem Galapo","Unidentified","Shu Fan Huang","Julian Smith","Unidentified male","Jerrison Garcia","Karol Grzegorczyk","Michelle Migmott","Unidentified","Name not released","Name not released","Unidentified","Frank Korowitz","Irving Schachter","Name not released","Name not released","Unidentified","Name not released","Balazs Pusztahazi","Unknown","Agatha Tsunis","Unknown","Unknown","Anthony Boyd","Pastor De La Cruz","Margherita Nanfro","Unidentified male","Andy Ramdhanie","Unidentified male","Unknown","Valding Duran","Unknown","Unknown","Maria Valentino","Sokhna Niang","Avrohom Mordechai Feldmaus","Unidentified male","Unknown ","Jean Chambers","Unknown","Marquis Willis","Matthew Brenner","Unidentified male","Marcus Joel","Unknown","Joie Sellers","Jackie Haeflinger","Unidentified female","Bryan Loughran","Unidentified male","Leroy Samuel","Steven Frosch","Not yet identified","Corri Samuels","Ethel Zaremba","Unknown","Gustavo Tapia","Xochil Zack Fortune","Unidentified male","Christal Aliotta","Robert Moczo","Wayne White","Unknown","Name not released","Jose Duran","Name not released","Unknown","Nicholas Soto","Galina Truglio","Charity Mahouna Hicks","Dale Tulloch","Dheyshawn Artope","Edward Jenkins","Anthony Perez","William Faison","Arben Hoti","Unknown","Christopher Leon","Elliot Mintzer","Christina Wipper","Philbert Martin Williams","Unknown","Ingrid Arcuik","Unknown","Marie Notaris","Anthony Githere","Unidentified male","Kacy Royal","Felipe Castro","Unidentified female","Shamel Jefferson","Unknown","Rebecca Ramnarine","Rosa Anidjar","Aaron Jung Hay Wu","Bonnie Lewin","Preston Byrd","Perla Reyes","Oscar Pauzhi","Unknown","William Guevara-Delgado","Unknown","Unknown","Kendall Heard","Kelly Gordon","Angel Torres","Nikon Vouyiouklis","Kadeem Mitchell","Unknown","Crystal Gravely","Darius Fletcher","Jada Monique Butts","Jaleel Furtado","Dwayne Dwyer","Unknown","Unknown","Unknown","Fidel Vidal Diaz","Lisa Julian","Unknown","Unknown","Ida Rosenblatt","Dylan Perry","Jonathan Nunez","Pei Yao Wu","Vadro Kone","Marlene Baharlias","Roshard Charles","Unknown","Jorge Rios","Kumar Ragunath","Edward Popek","Basdeo Mohan","Phillip Crucilla","Marisol Martinez","Gedalia Grinzaid","Jonathan Schmitz","Kaneez Hussein","Kiu Ying (Jason Leung)","Jia Hao Liang (Jennifer Gao)","Min Lin","Albert Cortez","William Pena","Margarita Seda","Ruben Rivera","Martha Tibillin-Guamug","Stanislav Chernyshov","Jelani Irving","Elin Medar","Brini Ramirez","James Benedict","Manuel Pani","Mark Hughes","Samantha Lee","Pedro Santiago","Angela Hurtado","Unidentified","Alphonzo Baines","Arturo Mateos","Nydja Herring","Iluminada Torres","Cooper Stock","Alexander Shear","Santo Lafaro","Jose Santiago","Mosa Khatun","Ved Wadhwa","Silberio Alvarado","Xiaoci Hu","Andrew Ingordo","Felipe Avila","Luis Cabrera (Paredes)"];
var ages = ["23","78","41","90","56","55","71","84","64","72","10","58","44","unknown","61","27","57","35","14","unknown","unknown","34","15","17","88","unknown","55","20","79","76","unknown","60","unknown","unknown","87","89","27","59","59","40","60","unknown","63","unknown","8","46","77","unknown","30","24","90","35","85","29","unknown","38","unknown","35","34","38","33","26","82","63","24","25","59","20","19","24","unknown","26","unknown","24","31","20","20","55","73","85","30","29","66","67","unknown","unknown","49","53","unknown","58","62","unknown","82","24","24","25","32","32","unknown","unknown","20","unknown","62","75","30","31","unknown","79","39","unknown","87","unknown","unknown","45","45","80","44","19","unknown","unknown","13","unknown","unknown","91","49","89","unknown","unknown","61","unknown","22","29","unknown","26","unknown","12","58","31","32","unknown","22","43","26","35","91","unknown","22","27","unknown","31","58","50","unknown","58","35","28","unknown","14","63","unknown","50","36","43","31","53","31","unknown","26","67","18","20","unknown","51","unknown","78","64","40","39","27","40","28","unknown","9","82","22","65","61","26","54","unknown","26","unknown","unknown","29","22","46","60","19","unknown","19","21","19","20","30","unknown","unknown","unknown","31","47","unknown","unknown","87","11","25","82","50","77","5","unknown","47","unknown","unknown","65","47","21","25","unknown","73","19","16","36","45","49","80","81","25","73","22","37","unknown","67","56","38","26","45","68","unknown","44","unknown","32","81","9","73","76","27","38","56","53","75","31","29","26"];
var dates = ["December 24","December 23","December 22","December 21","December 17","December 14","December 9","December 7","December 5","December 3","December 2","November 30","November 29","November 25","November 24","November 24","November 24","November 24","November 20","November 20","November 19","November 17","November 15","November 13","November 13","November 12","November 9","November 8","November 8","November 8","November 6","November 5","November 4","November 4","November 3","November 3","November 3","November 1","October 30","October 30","October 29","October 29","October 26","October 26","October 24","October 23","October 20","October 17","October 17","October 17","October 14","October 12","October 10","October 8","October 7","October 6","October 3","October 1","September 30","September 28","September 28","September 28","September 25","September 23","September 22","September 21","September 19","September 18","September 18","September 17","September 17","September 16","September 14","September 12","September 12","September 12","September 12","September 10","September 7","September 7","September 7","September 5","September 4","September 4","September 3","September 1","August 30","August 30","August 29","August 29","August 28","August 28","August 28","August 27","August 24","August 18","August 18","August 17","August 15","August 13","August 12","August 6","August 5","August 3","August 2","August 2","August 1","August 1","August 1","July 31","July 29","July 28","July 27","July 27","July 27","July 25","July 25","July 24","July 24","July 23","July 20","July 20","July 18","July 18","July 14","July 14","July 14","July 13","July 10","July 9","July 9","July 6","July 5","July 4","July 3","July 2","July 2","June 29","June 28","June 26","June 25","June 21","June 20","June 15","June 13","June 13","June 10","June 10","June 10","June 9","June 7","June 7","June 5","June 5","June 4","June 2","June 2","June 2","May 31","May 31","May 27","May 26","May 25","May 24","May 23","May 22","May 21","May 21","May 21","May 19","May 19","May 19","May 16","May 14","May 13","May 12","May 11","May 11","May 10","May 8","May 6","May 5","May 4","May 3","May 1","April 30","April 30","April 28","April 26","April 26","April 23","April 21","April 17","April 14","April 10","April 9","April 8","April 5","April 5","April 4","April 4","April 4","April 4","April 4","April 3","April 2","April 2","March 28","March 27","March 27","March 25","March 24","March 23","March 21","March 21","March 19","March 18","March 16","March 15","March 9","March 7","March 6","March 5","March 4","March 1","February 23","February 23","February 20","February 18","February 18","February 13","February 12","February 12","February 11","February 7","February 2","February 3","February 2","January 31","January 31","January 26","January 25","January 20","January 19","January 19","January 18","January 18","January 17","January 12","January 11","January 11","January 10","January 10","January 10","January 6","January 5","January 3","January 2","January 2","January 2","January 1","January 1"];

var myGraphicFile = File.openDialog('pick a photo');
var myObjectStyle = myDocument.objectStyles.add({name:"Frame"});

for (var i = 0; i < names.length; i++) {

  myDocument.pages.add();
 
}

for (var i = 0; i < myDocument.pages.length; i++) {

  var titleFrame = myDocument.pages[i].textFrames.add();
  titleFrame.geometricBounds = ["8p6", "3p1.876", "37p10.975", "110p10.124"];
  titleFrame.contents = 'KILLED BY TRAFFIC';
  var myTextObject = titleFrame.paragraphs.item(0);
  myTextObject.appliedFont = app.fonts.item('Stencil');
  myTextObject.pointSize = 125;
  myTextObject.justification = Justification.centerAlign;


  var myGraphic = myDocument.pages[i].place(myGraphicFile);
  myGraphic = myGraphic[0];
  var myObjectStyle = myDocument.objectStyles.item("GraphicFrame");
  try {
    var myName = myObjectStyle.name;
  }
    catch (myError){
    //The object style did not exist, so create it.
    myObjectStyle = myDocument.objectStyles.add({name:"GraphicFrame"});
  }
  var myFrame = myGraphic.parent;
  myFrame.geometricBounds = ['23p2.488','3p1.876','319p2.488','111p1.876'];
  myFrame.fit(FitOptions.proportionally);

  var nameFrame = myDocument.pages[i].textFrames.add();
  nameFrame.geometricBounds = ['322p4', '3p0', '335p6', '110p8'];
  nameFrame.contents = names[i];

  var nameObject = nameFrame.paragraphs.item(0);
  nameObject.appliedFont = app.fonts.item('Stencil');
  nameObject.pointSize = 125;
  nameObject.justification = Justification.centerAlign;

  var dateFrame = myDocument.pages[i].textFrames.add();
  dateFrame.geometricBounds = ['335p0', '3p0', '348p2', '110p8'];
  dateFrame.contents = dates[i];

  var dateObject = dateFrame.paragraphs.item(0);
  dateObject.appliedFont = app.fonts.item('Stencil');
  dateObject.pointSize = 125;
  dateObject.justification = Justification.centerAlign;



}

// geometricBounds: [y1, x1, y2, x2]
