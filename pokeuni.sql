-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: pokeuni
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `captured`
--

DROP TABLE IF EXISTS `captured`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `captured` (
  `id_usuario` int(11) NOT NULL,
  `id_pokemon` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `captured`
--

LOCK TABLES `captured` WRITE;
/*!40000 ALTER TABLE `captured` DISABLE KEYS */;
/*!40000 ALTER TABLE `captured` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombreEmpresa` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'empresa1'),(2,'empresa1'),(3,'empresa1'),(4,'empresa1'),(5,'empresa1'),(6,'empresa1'),(7,'empresa1'),(8,'empresa1'),(9,'empresa1'),(10,'empresa1'),(11,'empresa1'),(12,'empresa1'),(13,'empresa1'),(14,'empresa1'),(15,'empresa1'),(16,'empresa1'),(17,'empresa1'),(18,'empresa1'),(19,'empresa1'),(20,'empresa1'),(21,'empresa1'),(22,'empresa1'),(23,'empresa1'),(24,'empresa1'),(25,'empresa1'),(26,'empresa1'),(27,'empresa1'),(28,'empresa1'),(29,'empresa1'),(30,'empresa1'),(31,'empresa1'),(32,'empresa1'),(33,'empresa1'),(34,'empresa1'),(35,'empresa1'),(36,'empresa1'),(37,'empresa1'),(38,'empresa1'),(39,'empresa1'),(40,'empresa1'),(41,'empresa1'),(42,'empresa1'),(43,'empresa1'),(44,'empresa1'),(45,'empresa1'),(46,'empresa1'),(47,'empresa1'),(48,'empresa1'),(49,'empresa1'),(50,'empresa1'),(51,'empresa1'),(52,'empresa1'),(53,'empresa1'),(54,'empresa1'),(55,'empresa1'),(56,'empresa1'),(57,'empresa1'),(58,'empresa1'),(59,'empresa1'),(60,'platanitos'),(61,'empresa1'),(62,'empresa1'),(63,'empresa1'),(64,'empresa1'),(65,'empresa1'),(66,'empresa1'),(67,'empresa1'),(68,'empresa1'),(69,'empresa1'),(70,'empresa1'),(71,'empresa1'),(72,'empresa1'),(73,'empresa1'),(74,'empresa1'),(75,'empresa1'),(76,'empresa1'),(77,'empresa1'),(78,'empresa1'),(79,'empresa1'),(80,'empresa1'),(81,'empresa1'),(82,'empresa1'),(83,'empresa1'),(84,'empresa1'),(85,'empresa1'),(86,'empresa1'),(87,'empresa1'),(88,'empresa1'),(89,'empresa1'),(90,'empresa1'),(91,'empresa1'),(92,'empresa1'),(93,'empresa1'),(94,'platanitos');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokedex`
--

DROP TABLE IF EXISTS `pokedex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pokedex` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pokemon` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokedex`
--

LOCK TABLES `pokedex` WRITE;
/*!40000 ALTER TABLE `pokedex` DISABLE KEYS */;
INSERT INTO `pokedex` VALUES (1,2,1,13),(2,2,1,13),(3,2,1,13),(4,2,1,13),(5,2,1,13),(6,2,1,13),(7,2,1,13),(8,2,1,13),(9,2,1,13),(10,2,1,13),(11,2,1,13),(12,2,1,13),(13,2,1,13),(14,2,1,13),(15,2,1,13),(16,2,1,13),(17,2,1,13),(18,2,1,13),(19,2,1,13),(20,2,1,13),(21,2,1,13),(22,2,1,13),(23,2,1,13),(24,2,1,13),(25,2,1,13),(26,2,1,13),(27,2,1,13),(28,2,1,13),(29,2,1,13),(30,2,1,13),(31,2,1,13),(32,2,1,13),(33,2,1,13),(34,2,1,13),(35,2,1,13),(36,2,1,13),(37,2,1,13),(38,2,1,13),(39,2,1,13),(40,2,1,13),(41,2,1,13),(42,2,1,13),(43,2,1,13),(44,2,1,13),(45,2,1,13),(46,2,1,13),(47,2,1,13),(48,2,1,13),(49,2,1,13),(50,2,1,13),(51,2,1,13),(52,2,1,13),(53,2,1,13),(54,2,1,13),(55,2,1,13),(56,2,1,13),(57,2,1,13);
/*!40000 ALTER TABLE `pokedex` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pokemones`
--

DROP TABLE IF EXISTS `pokemones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pokemones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `posiciox` varchar(50) NOT NULL,
  `posiciony` varchar(50) NOT NULL,
  `id_pregunta` int(11) NOT NULL,
  `estado` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pokemones`
--

LOCK TABLES `pokemones` WRITE;
/*!40000 ALTER TABLE `pokemones` DISABLE KEYS */;
INSERT INTO `pokemones` VALUES (1,'ratata','86.42354974067392','65.923884343668',0,'libre'),(2,'veyota','62.764253067930895','99.18824098847283',13,'capturado'),(3,'goku','59.15562879805307','76.14744782576122',13,'libre'),(4,'ratata','97.37883600295302','68.82423366839407',10,'libre'),(5,'goku','30.912997070847336','25.632686136584205',5,'libre'),(6,'veyota','40.28179895041111','7.440394281035467',4,'libre'),(7,'veyota','74.43138736434598','3.0673774515095786',11,'libre'),(8,'pikacho','82.44291161954041','10.010290089346974',4,'libre'),(9,'goku','23.750426937162118','14.56036137831127',10,'libre'),(10,'pikacho','8.388082916145411','31.551950268486518',13,'libre'),(11,'goku','61.367894873702845','41.409353765499546',4,'libre'),(12,'pikacho','79.3627429270305','56.989711388288946',3,'libre'),(13,'goku','81.60567371165979','2.114907723902837',15,'libre'),(14,'goku','98.46953016483828','91.70560408940109',7,'libre'),(15,'ratata','94.34879933584821','44.552491323618156',10,'libre'),(16,'ratata','79.97095052315673','44.53782916129833',8,'libre'),(17,'veyota','37.532897172907155','17.833741994672735',10,'libre'),(18,'goku','96.05036888443328','90.78436686504563',12,'libre'),(19,'ratata','90.91334909109167','76.2544794097547',5,'libre'),(20,'pikacho','65.40080702527726','89.41147692116058',12,'libre'),(21,'ratata','77.30511170121268','69.31449421083362',20,'libre'),(22,'goku','10.233516956792421','90.57238559923198',15,'libre'),(23,'ratata','6.63611153715884','37.9915137684971',27,'libre'),(24,'goku','88.8334468436792','81.84070134312356',20,'libre'),(25,'veyota','95.07074347659825','81.92380479531948',5,'libre'),(26,'goku','42.463826171294606','68.34191549730238',24,'libre'),(27,'ratata','21.195794623366183','23.6478259730966',38,'libre'),(28,'pikacho','14.828451797121645','25.45414515930826',14,'libre'),(29,'veyota','23.35346380278367','80.42348811270772',1,'libre'),(30,'ratata','25.86469740384356','65.60220397303549',29,'libre'),(31,'ratata','52.60157183753724','99.88570307919127',34,'libre'),(32,'goku','46.752335427692216','97.31975990097472',6,'libre'),(33,'ratata','54.891981164535','80.79570549075561',12,'libre'),(34,'pikacho','29.726342979441856','30.308353961538835',0,'libre'),(35,'pikacho','73.30267032149314','10.979672538641294',32,'libre'),(36,'pikacho','29.513888958114865','66.07621896169992',36,'libre'),(37,'veyota','48.67259958934322','33.737670363964554',36,'libre'),(38,'ratata','69.6412813229131','3.3372382186986904',47,'libre'),(39,'goku','35.03603523525478','51.70038112269706',3,'libre'),(40,'ratata','0.0926196638645349','83.24614235119066',39,'libre'),(41,'ratata','33.829997278553606','42.4593497505352',4,'libre'),(42,'veyota','61.3015213971569','16.114679678877188',36,'libre'),(43,'goku','38.17644093803163','87.28518589771734',22,'libre'),(44,'veyota','48.248363014643125','75.9897158141049',47,'libre'),(45,'goku','52.7059229678627','60.502489325944',44,'libre'),(46,'goku','21.521272003683833','44.86621494336936',51,'libre'),(47,'pikacho','5.802611025070492','76.67826123085753',2,'libre'),(48,'ratata','5.069782533422651','77.6559419281058',10,'libre'),(49,'ratata','51.659640090323286','11.957357183966199',11,'libre'),(50,'goku','63.163777429909395','62.89662970012513',56,'libre'),(51,'veyota','89.07182504472127','91.63039827416077',12,'libre'),(52,'goku','97.78866508951577','12.125282920264269',10,'libre'),(53,'veyota','57.285873419608244','3.179089670547919',19,'libre'),(54,'ratata','10.344954762176005','50.57399114850618',42,'libre'),(55,'ratata','95.50211499758512','2.9075921700631557',63,'libre'),(56,'veyota','45.87135172898715','61.66826538178767',39,'libre'),(57,'veyota','50.48230947929804','16.55998556281526',27,'libre'),(58,'pikacho','48.01430499941477','87.65180745788261',39,'libre'),(59,'veyota','54.40823684564431','61.19754263431722',44,'libre'),(60,'goku','75.73457763517327','7.162886044167571',45,'libre'),(61,'veyota','40.63727998732307','69.32483984658289',53,'libre'),(62,'pikacho','76.42262335133128','81.08551517575013',56,'libre'),(63,'pikacho','64.21908819739957','96.90775062821298',50,'libre'),(64,'ratata','85.33283440589558','86.04832022463245',28,'libre'),(65,'pikacho','50.470940588761','88.70469790836519',32,'libre'),(66,'veyota','26.258044010777624','72.83400350422507',63,'libre'),(67,'goku','93.61180900614865','85.03211372225714',38,'libre'),(68,'ratata','10.030079869562968','22.723739735930828',15,'libre'),(69,'veyota','14.91260361983684','89.10448658268604',30,'libre'),(70,'ratata','46.612519944339546','30.955391089013638',53,'libre'),(71,'ratata','22.964854694584602','5.59630802254425',39,'libre'),(72,'veyota','16.652694007939207','41.68572077195791',37,'libre'),(73,'goku','17.7044788672164','98.01061536057935',38,'libre'),(74,'goku','84.34460658489236','68.57306902836922',63,'libre');
/*!40000 ALTER TABLE `pokemones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntasexternas`
--

DROP TABLE IF EXISTS `preguntasexternas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preguntasexternas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pregunta` int(11) NOT NULL,
  `id_empresa` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntasexternas`
--

LOCK TABLES `preguntasexternas` WRITE;
/*!40000 ALTER TABLE `preguntasexternas` DISABLE KEYS */;
/*!40000 ALTER TABLE `preguntasexternas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preguntasnosotros`
--

DROP TABLE IF EXISTS `preguntasnosotros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `preguntasnosotros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_empresa` int(11) NOT NULL,
  `enunciado` varchar(50) DEFAULT NULL,
  `respuesta` varchar(500) DEFAULT NULL,
  `tiempo` bigint(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preguntasnosotros`
--

LOCK TABLES `preguntasnosotros` WRITE;
/*!40000 ALTER TABLE `preguntasnosotros` DISABLE KEYS */;
INSERT INTO `preguntasnosotros` VALUES (1,1,'enuncioado','respt',1576221055137),(2,1,'enuncioado','respt',1576221265525),(3,1,'enuncioado','respt',1576221271404),(4,1,'enuncioado','respt',1576221279633),(5,1,'enuncioado','respt',1576221284299),(6,1,'enuncioado','respt',1576221287615),(7,1,'enuncioado','respt',1576221313160),(8,1,'enuncioado','respt',1576221322857),(9,1,'enuncioado','respt',1576223399830),(10,1,'enuncioado','respt',1576225543078),(11,1,'enuncioado','respt',1576225632324),(12,1,'enuncioado','respt',1576226034885),(13,1,'enuncioado','respt',1576226145892),(14,1,'enuncioado','respt',1576226480479),(15,1,'enuncioado','respt',1576226690786),(16,1,'enuncioado','respt',1576226694929),(17,1,'enuncioado','respt',1576226700708),(18,1,'enuncioado','respt',1576226702677),(19,1,'enuncioado','respt',1576226912251),(20,1,'enuncioado','respt',1576227058039),(21,1,'enuncioado','respt',1576227084082),(22,1,'enuncioado','respt',1576229214161),(23,1,'enuncioado','respt',1576229225744),(24,1,'enuncioado','respt',1576229227641),(25,1,'enuncioado','respt',1576229229582),(26,1,'enuncioado','respt',1576229232028),(27,1,'enuncioado','respt',1576229237770),(28,1,'enuncioado','respt',1576229522134),(29,1,'enuncioado','respt',1576229536950),(30,1,'enuncioado','respt',1576229545603),(31,1,'enuncioado','respt',1576230044795),(32,1,'enuncioado','respt',1576230145755),(33,1,'enuncioado','respt',1576230216581),(34,1,'enuncioado','respt',1576230518484),(35,1,'enuncioado','respt',1576230551795),(36,1,'enuncioado','respt',1576230643050),(37,1,'enuncioado','respt',1576230755440),(38,1,'enuncioado','respt',1576230792031),(39,1,'enuncioado','respt',1576231512152),(40,1,'enuncioado','respt',1576231609637),(41,1,'enuncioado','respt',1576231665600),(42,1,'enuncioado','respt',1576231796352),(43,1,'enuncioado','respt',1576231837036),(44,1,'enuncioado','respt',1576232370313),(45,1,'enuncioado','respt',1576232474614),(46,1,'enuncioado','respt',1576232541045),(47,1,'enuncioado','respt',1576233353327),(48,1,'enuncioado','respt',1576233424201),(49,1,'enuncioado','respt',1576233460786),(50,1,'enuncioado','respt',1576233531288),(51,1,'enuncioado','respt',1576239224137),(52,1,'enuncioado','respt',1576239424144),(53,1,'enuncioado','respt',1576239439714),(54,1,'enuncioado','respt',1576239540122),(55,1,'enuncioado','respt',1576240042752),(56,1,'enuncioado','respt',1576240107066),(57,1,'enuncioado','respt',1576240133685),(58,1,'enuncioado','respt',1576240150962),(59,1,'enuncioado','respt',1576240153484),(60,1,'enuncioado','respt',1576240201283),(61,1,'enuncioado','respt',1576240225491),(62,1,'enuncioado','respt',1576240243544),(63,1,'enuncioado','respt',1576240271579),(64,1,'enuncioado','respt',1576240312094),(65,1,'enuncioado','respt',1576240348714),(66,1,'enuncioado','respt',1576240915931),(67,1,'enuncioado','respt',1576241000095),(68,1,'enuncioado','respt',1576241021732),(69,1,'enuncioado','respt',1576241048515),(70,1,'enuncioado','respt',1576241164831),(71,1,'enuncioado','respt',1576241311675),(72,1,'enuncioado','respt',1576241859972),(73,1,'enuncioado','respt',1576242002086),(74,1,'enuncioado','respt',1576242210376),(75,1,'enuncioado','respt',1576242222083),(76,1,'enuncioado','respt',1576242399133),(77,1,'enuncioado','respt',1576242432624),(78,1,'enuncioado','respt',1576242460527),(79,1,'enuncioado','respt',1576242503832),(80,1,'enuncioado','respt',1576242524274),(81,1,'enuncioado','respt',1576242601977),(82,1,'enuncioado','respt',1576242783669),(83,1,'enuncioado','respt',1576242862849),(84,1,'enuncioado','respt',1576242885941),(85,1,'enuncioado','respt',1576252096889),(86,1,'enuncioado','respt',1576255296116),(87,1,'enuncioado','respt',1576684378672);
/*!40000 ALTER TABLE `preguntasnosotros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `retodex`
--

DROP TABLE IF EXISTS `retodex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `retodex` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pregunta` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha_visto` bigint(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retodex`
--

LOCK TABLES `retodex` WRITE;
/*!40000 ALTER TABLE `retodex` DISABLE KEYS */;
INSERT INTO `retodex` VALUES (1,1,1,1576226964083),(2,1,1,1576229094162),(3,1,1,1576229105744),(4,1,1,1576229107641),(5,1,1,1576229109582),(6,1,1,1576229112028),(7,1,1,1576229117770),(8,0,1,1576229402134),(9,4,1,1576229416950),(29,1,61,1576240975068),(31,1,61,1576241049308),(32,1,61,1576241089579),(33,1,61,1576241155395),(35,1,61,1576241194748),(36,1,61,1576241355008),(37,1,61,1576241358213),(48,1,61,1576242609503),(54,1,61,1576255767441),(56,1,61,1576684605592);
/*!40000 ALTER TABLE `retodex` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `puntaje` int(11) NOT NULL,
  `nivel` int(11) NOT NULL,
  `id_empresa` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `token` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `urlFoto` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'nombre','apellido','password',0,0,1,'username','79610002','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(2,'nombre','apellido','password',0,0,1,'username','16095839','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(3,'nombre','apellido','password',0,0,1,'username','98321445','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(4,'nombre','apellido','password',0,0,1,'username','13150175','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(5,'nombre','apellido','password',0,0,1,'username','99071018','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(6,'nombre','apellido','password',0,0,1,'username','98277071','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(7,'nombre','apellido','password',0,0,1,'username','67003840','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(8,'nombre','apellido','password',0,0,1,'username','19418085','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(9,'nombre','apellido','password',0,0,1,'username','65477236','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(10,'nombre','apellido','password',0,0,1,'username','76729951','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(11,'nombre','apellido','password',0,0,1,'username','13777034','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(12,'nombre','apellido','password',0,0,1,'username','31092626','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(13,'nombre','apellido','password',0,0,1,'username','3328355','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(14,'nombre','apellido','password',0,0,1,'username','89755477','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(15,'nombre','apellido','password',0,0,1,'username','52450007','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(16,'nombre','apellido','password',0,0,1,'username','17485587','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(17,'nombre','apellido','password',0,0,1,'username','57811476','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(18,'nombre','apellido','password',0,0,1,'username','47399147','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(19,'nombre','apellido','password',0,0,1,'username','10364909','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(20,'nombre','apellido','password',0,0,1,'username','60201973','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(21,'nombre','apellido','password',0,0,1,'username','58086368','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(22,'nombre','apellido','password',0,0,1,'username','97620259','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(23,'nombre','apellido','password',0,0,1,'username','17041769','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(24,'nombre','apellido','password',0,0,1,'username','41346184','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(25,'nombre','apellido','password',0,0,1,'username','64033295','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(26,'nombre','apellido','password',0,0,1,'username','39290062','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(27,'nombre','apellido','password',0,0,1,'username','79365151','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(28,'nombre','apellido','password',0,0,1,'username','11115679','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(29,'nombre','apellido','password',0,0,1,'username','85642439','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(30,'nombre','apellido','password',0,0,1,'username','91904704','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(31,'nombre','apellido','password',0,0,1,'username','9459418','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(32,'nombre','apellido','password',0,0,1,'username','26397942','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(33,'nombre','apellido','password',0,0,1,'username','29136328','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(34,'nombre','apellido','password',0,0,1,'username','74657815','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(35,'nombre','apellido','password',0,0,1,'username','51007413','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(36,'nombre','apellido','password',0,0,1,'username','29293177','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(37,'nombre','apellido','password',0,0,1,'username','46337707','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(38,'nombre','apellido','password',0,0,1,'username','75512281','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(39,'nombre','apellido','password',0,0,1,'username','79210566','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(40,'nombre','apellido','password',0,0,1,'username','12868686','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(41,'nombre','apellido','password',0,0,1,'username','85121660','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(42,'nombre','apellido','password',0,0,1,'username','56963966','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(43,'nombre','apellido','password',0,0,1,'username','33684463','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(44,'nombre','apellido','password',0,0,1,'username','32726649','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(45,'nombre','apellido','password',0,0,1,'username','40457971','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(46,'nombre','apellido','password',0,0,1,'username','68214269','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(47,'nombre','apellido','password',0,0,1,'username','3338120','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(48,'nombre','apellido','password',0,0,1,'username','83363363','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(49,'nombre','apellido','password',0,0,1,'username','38810543','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(50,'nombre','apellido','password',0,0,1,'username','35894578','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(51,'nombre','apellido','password',0,0,1,'username','67480077','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(52,'nombre','apellido','password',0,0,1,'username','22729175','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(53,'nombre','apellido','password',0,0,1,'username','17229575','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(54,'nombre','apellido','password',0,0,1,'username','47123301','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(55,'nombre','apellido','password',0,0,1,'username','45390648','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(56,'nombre','apellido','password',0,0,1,'username','88178600','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(57,'nombre','apellido','password',0,0,1,'username','53285516','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(58,'nombre','apellido','password',0,0,1,'username','26734689','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(59,'nombre','apellido','password',0,0,1,'username','13417152','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(60,' boomer','aple','a',0,0,60,'admin','85767196','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(61,' boomer','aple','pas',0,0,60,'trabajador','64252857','trabajador','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(62,'nombre','apellido','password',0,0,1,'username','21763285','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(63,'nombre','apellido','password',0,0,1,'username','6033345','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(64,'nombre','apellido','password',0,0,1,'username','81359324','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(65,'nombre','apellido','password',0,0,1,'username','92926105','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(66,'nombre','apellido','password',0,0,1,'username','88707428','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(67,'nombre','apellido','password',0,0,1,'username','93009962','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(68,'nombre','apellido','password',0,0,1,'username','94880796','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(69,'nombre','apellido','password',0,0,1,'username','69743222','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(70,'nombre','apellido','password',0,0,1,'username','90326436','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(71,'nombre','apellido','password',0,0,1,'username','95206048','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(72,'nombre','apellido','password',0,0,1,'username','68220515','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(73,'nombre','apellido','password',0,0,1,'username','43115784','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(74,'nombre','apellido','password',0,0,1,'username','80738162','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(75,'nombre','apellido','password',0,0,1,'username','30058964','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(76,'nombre','apellido','password',0,0,1,'username','92194889','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(77,'nombre','apellido','password',0,0,1,'username','44700077','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(78,'nombre','apellido','password',0,0,1,'username','35531916','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(79,'nombre','apellido','password',0,0,1,'username','22697151','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(80,'nombre','apellido','password',0,0,1,'username','47794220','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(81,'nombre','apellido','password',0,0,1,'username','37681071','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(82,'nombre','apellido','password',0,0,1,'username','29767206','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(83,'nombre','apellido','password',0,0,1,'username','94910128','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(84,'nombre','apellido','password',0,0,1,'username','44466947','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(85,'nombre','apellido','password',0,0,1,'username','54321932','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(86,'nombre','apellido','password',0,0,1,'username','21453969','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(87,'nombre','apellido','password',0,0,1,'username','50585951','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(88,'nombre','apellido','password',0,0,1,'username','60266358','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(89,'nombre','apellido','password',0,0,1,'username','44632982','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(90,'nombre','apellido','password',0,0,1,'username','32586988','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(91,'nombre','apellido','password',0,0,1,'username','78219351','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(92,'nombre','apellido','password',0,0,1,'username','16673209','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(93,'nombre','apellido','password',0,0,1,'username','4424315','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(94,' ','aple','pas',0,0,60,'trabajador','94394857','trabajador','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(95,' weweq','aple','pas',0,0,60,'trabajador','21181843','trabajador','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(96,'nombre','apellido','password',0,0,1,'username','38182502','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(97,' boomer','aple','a',0,0,60,'admin','74352459','admin','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(98,' weweq','aple','pas',0,0,60,'trabajador','12904751','trabajador','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg'),(99,' weweq','aple','pas',0,0,60,'trabajador','85312310','trabajador','https://icon-library.net/images/user-icon-jpg/user-icon-jpg-18.jpg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-18 11:17:53
