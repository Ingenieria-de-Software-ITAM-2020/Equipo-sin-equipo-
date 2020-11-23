# Arquitectura en capas

El diseño de esta aplicación web será una mediante una arquitectura en capas. El diseño de esta se dividira en 3 capas:
* La capa de presentación, que en genral será todo lo que puede ver el usuario, en esto están incluidas todas las interfaces  con las que interectuará como el log-in y los menús, además de todos los chats a los que tendrá acceso; esto es, los archivos html y css que conforman la página.
* La segunda capa, la capa de negocio, es la capa que se encargara del procesamiento de todas las peticiones del usuario y consultar la base de datos; esto en general está comprendido en los archivos js, aunque parte de estas funcionalidades básicas tambien se encontrarán en el html.
* Finalemnte la última capa será la de datos, que será donde se almacene toda la información de la aplicación y la base de alumnos del itam, utilizada para la autenticación de usuarios.
En general, se puede ver porque se ha elegido una arquitectura por capas para esta aplicacción web, ya que es mas sencillo organizar el desarollo de cada capa según lo que se quiera implementar, sin afectar las otras capas. Pues de esta manera se puede trabajar en el diseño de la aplicación o el funcionamiento de la misma modificando únicamente las partes que lo requieran y facilitando las pruebas para una implementación más veloz.
