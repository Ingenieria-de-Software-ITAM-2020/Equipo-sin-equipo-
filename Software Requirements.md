*Al menos 3 casos de uso por requerimiento*
# *Software Requirements Specification*<br>para<br>*Project*
#### Version 1.0 approved
#### Preparado por Bernardo Paniagua, Ricardo Alonso y Ricardo Edward
#### Equipo sin equipo
#### 11/27/20


## **Tabla de Contendios**
[**Tabla de Contendios**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#tabla-de-contendios)

[**Historial de Revisión**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#historial-de-revisi%C3%B3n)
1. [**Introducción**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#1-introducci%C3%B3n)
    1. [Propósito](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#11-prop%C3%B3sito)
    2. [Convenciones del documento](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#12-convenciones-del-documento)
    3. [Audiencia enfocada y sugerencias de lectura](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#13-audiencia-enfocada-y-sugerencias-de-lectura)
    4. [Alcance del producto](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#14-alcance-del-producto)
    5. [Referencias](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#15-referencias)
2. [**Descripción general**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#2-descripci%C3%B3n-general)
    1. [Perspectiva del producto](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#21-perspectiva-del-producto)
    2. [Funciones del producto](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#22-funciones-del-producto)
    3. [Clases de usuario y características](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#23-clases-de-usuario-y-caracter%C3%ADsticas)
    4. [Entorno operativo](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#24-entorno-operativo)
    5. [Restricciones de diseño e implementación](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#25-restricciones-de-dise%C3%B1o-e-implementaci%C3%B3n)
    6. [Documentación de usuario](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#26-documentaci%C3%B3n-de-usuario)
    7. [Suposiciones y dependencias](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#27-suposiciones-y-dependencias)
3. [**Requerimientos de interfaz externa**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#3-requerimientos-de-interfaz-externa)
    1. [Interfaces de usuario](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#31-interfaces-de-usuario)
    2. [Interfaces de hardware](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#32-interfaces-de-hardware)
    3. [Interfaces de software](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#33-interfaces-de-software)
    4. [Interfaces de comunicación](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#34-interfaces-de-comunicaci%C3%B3n)
4. [**Funcionalidades del sistema**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#4-funcionalidades-del-sistema)
    1. [System Feature 1](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#41-system-feature-1)
    2. [System Feature 2](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#42-system-feature-2)
    3. [System Feature 3](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#43-system-feature-3)
5. [**Otros requerimientos no funcionales**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#5-otros-requerimientos-no-funcionales)
    1. [Requerimientos de rendimiento](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#51-requerimientos-de-rendimiento)
    2. [Requerimientos de protección](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#52-requerimientos-de-protecci%C3%B3n)
    3. [Requerimientos de seguridad](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#53-requerimientos-de-seguridad)
    4. [Atributos de calidad de software](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#54-atributos-de-calidad-de-software)
    5. [Reglas de Negocio](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#55-reglas-de-negocio)
6. [**Otros requerimientos**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#6-otros-requerimientos)

[**Apéndice A: Glosario**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#ap%C3%A9ndice-a-glosario)

[**Apéndice B: Modelos de análisis**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#ap%C3%A9ndice-b-modelos-de-an%C3%A1lisis)

[**Apéndice C: Lista por determinar**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Proyecto/Software%20Requirements.md#ap%C3%A9ndice-c-lista-por-determinar)

## Historial de Revisión

| Nombre | Fecha | Razón del cambio | Versión |
| ------ | ----- | ---------------- | ------- |
| | | | |
| | | | |

## **1. Introducción**
### 1.1. Propósito
El propósito de este documento es describir los requerimientos de software para un sistema de comunicación que sirva a los alumnos, profesores y personal administrativo del Instituto Tecnológico Autónomo de México, que pueda funcionar de manera autónoma basada en el servidor del plantel educativo.

### 1.2. Convenciones del documento
Las funcionalidades están ordenadas de manera general por prioridad. 
REQ-X significa requerimiento número X.

### 1.3. Audiencia enfocada y sugerencias de lectura
Este documento sera usado por los desarrolladores de este software para llevar a cabo la programación correcta de las funcionalidades descritas, para esto es importante leer todo el documento. Además, se espera que el personal directivo y administrativo del ITAM, particularmente en el departamiento de ingeniería en computación para avalar que las funcionalidades cumplan con el propósito esperado; para estos es de interés particular el apartado 4 de este documento.

### 1.4. Alcance del producto
Se busca que este software facilite la comunicación entre los distintos integrantes del plantel educativo del ITAM, permitiendo que los alumnos inscritos en esta institución se comuniquen entré sí para facilitar desarrollo de trabajos y estudio, y además permitir a estos entrar en contacto de manera fácil con sus profesores y con el personal administrativo de la universidad.

### 1.5. Referencias
List any other documents or Web addresses to which this SRS refers. These may include user interface style guides, contracts, standards, system requirements specifications, use case documents, or a vision and scope document. Provide enough information so that the reader could access a copy of each reference, including title, author, version number, date, and source or location.

## **2. Descripción general**
### 2.1. Perspectiva del producto
Describe the context and origin of the product being specified in this SRS. For example, state whether this product is a follow-on member of a product family, a replacement for certain existing systems, or a new, self-contained product. If the SRS defines a component of a larger system, relate the requirements of the larger system to the functionality of this software and identify interfaces between the two. A simple diagram that shows the major components of the overall system, subsystem interconnections, and external interfaces can be helpful.

### 2.2. Funciones del producto
Summarize the major functions the product must perform or must let the user perform. Details will be provided in Section 3, so only a high level summary (such as a bullet list) is needed here. Organize the functions to make them understandable to any reader of the SRS. A picture of the major groups of related requirements and how they relate, such as a top level data flow diagram or object class diagram, is often effective.

### 2.3. Clases de usuario y características
Identify the various user classes that you anticipate will use this product. User classes may be differentiated based on frequency of use, subset of product functions used, technical expertise, security or privilege levels, educational level, or experience. Describe the pertinent characteristics of each user class. Certain requirements may pertain only to certain user classes. Distinguish the most important user classes for this product from those who are less important to satisfy

### 2.4. Entorno operativo
Describe the environment in which the software will operate, including the hardware platform, operating system and versions, and any other software components or applications with which it must peacefully coexist.

### 2.5. Restricciones de diseño e implementación
Describe any items or issues that will limit the options available to the developers. These might include: corporate or regulatory policies; hardware limitations (timing requirements, memory requirements); interfaces to other applications; specific technologies, tools, and databases to be used; parallel operations; language requirements; communications protocols; security considerations; design conventions or programming standards (for example, if the customer’s organization will be responsible for maintaining the delivered software).

### 2.6. Documentación de usuario
List the user documentation components (such as user manuals, on-line help, and tutorials) that will be delivered along with the software. Identify any known user documentation delivery formats or standards.

### 2.7. Suposiciones y dependencias
List any assumed factors (as opposed to known facts) that could affect the requirements stated in the SRS. These could include third-party or commercial components that you plan to use, issues around the development or operating environment, or constraints. The project could be affected if these assumptions are incorrect, are not shared, or change. Also identify any dependencies the project has on external factors, such as software components that you intend to reuse from another project, unless they are already documented elsewhere (for example, in the vision and scope document or the project plan).

## **3. Requerimientos de interfaz externa**
### 3.1. Interfaces de usuario
La pantalla inicial será un log-in, para iniciar sesión dentro del el chat, esta interfaz sera sencilla, sólo tendrá dos barras para ingresar texto (usuario y contraseña) y un botón para acceder; en caso de ingresar datos erroneos se le inforamará al usuario. Dentro de la aplicación se contará con un menú donde se listarán los chats en los que se es participante, además de una barra de búsqueda para buscar otros usuarios y algunas opciones de configuración. Finalemente, cada chat constará de una barra de texto para escribir mensaje y un botón de enviar, además de algunas opciones para enviar otro tipo de archivos como imágenes o pdfs. De manera general, cada página tendra una barra superior que informará al usuario dondé se ecneuntra, el logo del itam y un botón para regresar.

### 3.2. Interfaces de hardware
Esta aplicación web deberá ser lo mas universal posible, para permitir su acceso a todos los usuarios del ITAM desde la mayor parte de dispositivos posibles, desde un navegador web, por lo que se debe asegurar que todas las funciones son compatibles con las últimas versiones de la mayoría de los navegadores.

### 3.3. Interfaces de software
La base de datos de los usuarios debe estar conectada al la base de alumnos del ITAM, para usar sus datos para la autenticación de los usuarios, además esta aplicación debe ser accesible desde la página web del ITAM y de sus plataformas para alumnos.

### 3.4. Interfaces de comunicación
Para la utilización de este servicio se debe contar con una ceunta vigente del ITAM, además de acceso a internet desde un navegador web, preferiblemente en su úlitma versión. Además el servicio debe contar con un sistema de encriptación de los chats, para asegurar la privacidad fuera de la organización. Para la utilización de este servicio se debe contar con una ceunta vigente del ITAM, además de acceso a internet desde un navegador web, preferiblemente en su úlitma versión. Además el servicio debe contar con un sistema de encriptación de los chats, para asegurar la privacidad fuera de la organización. Debido a la naturaleza del servicio, se contará con un gran volumen de transmisión de datos y se debe asegurar que todos los chats tengan una sincronización óptima.

## **4. Funcionalidades del sistema**
*(This template illustrates organizing the functional requirements for the product by system features, the major services provided by the product. You may prefer to organize this section by use case, mode of operation, user class, object class, functional hierarchy, or combinations of these, whatever makes the most logical sense for your product.)*

### 4.1. El sistema utiliza la cuenta del ITAM para autentificar a lxs usuarixs

#### 4.1.1 Descripción y prioridad

Se utilizará el correo institucional para acceder al software, para que solo los miembros de la comunidad ITAM tengan acceso a éste. Tiene prioridad alta, ya que se debe garantizar la confidencialidad y privacidad de las salas de chat.

#### 4.1.2 Secuencias de respuesta

* Al entrar al sistema, se pide el correo institucional y la contraseña
* Si son correctos, entra a la página principal
* En caso contrario, dar un mensaje de error

#### 4.1.3 Requerimientos

&nbsp; &nbsp; &nbsp; &nbsp; REQ-1: El sistema tiene la base de datos de usuarios del ITAM
&nbsp; &nbsp; &nbsp; &nbsp; REQ-2: 


### 4.2. El sistema crea una sala por cada clase

#### 4.2.1 Descripción y prioridad

Al tener las listas definitivas, el sistema crea una sala para cada materia que el alumnx tenga inscrita. Antes de iniciar un nuevo semestre, estos grupos se cierran y se borran del sistema. Es de prioridad media, ya que 

#### 4.2.2 Secuencias de respuesta

* El alumnx hace su horario
* Cuando se tienen las listas definitivas, el sistema crea una sala por cada grupo
* El sistema añade a cada sala todxs lxs alumnxs inscritos en ese grupo
* Cuando se entregan calificaciones, el sistema elimina la sala

#### 4.2.3 Requerimientos



### 4.3. Lxs alumnxs pueden crear salas personalizadas con otrxs alumnxs y/o profesorxs

#### 4.3.1 Descripción y prioridad



#### 4.3.2 Secuencias de respuesta
#### 4.3.3 Requerimientos

&nbsp; &nbsp; &nbsp; &nbsp; REQ-1:

### 4.4. Un alumnx puede solicitar un chat con el personal administrativo

#### 4.4.1 Descripción y prioridad

baja

#### 4.4.2 Secuencias de respuesta
List the sequences of user actions and system responses that stimulate the behavior defined for this feature. These will correspond to the dialog elements associated with use cases.
#### 4.4.3 Requerimientos
Itemize the detailed functional requirements associated with this feature. These are the software capabilities that must be present in order for the user to carry out the services provided by the feature, or to execute the use case. Include how the product should respond to anticipated error conditions or invalid inputs. Requirements should be concise, complete, unambiguous, verifiable, and necessary. Use “TBD” as a placeholder to indicate when necessary information is not yet available.

*(Each requirement should be uniquely identified with a sequence number or a meaningful tag of some kind.)*
<br>*REQ-1:*
<br>*REQ-2:*

### 4.4. System Feature 5
*(Don’t really say “System Feature 1.” State the feature name in just a few words.)*
#### 4.4.1 Descripción y prioridad
Provide a short description of the feature and indicate whether it is of High, Medium, or Low priority. You could also include specific priority component ratings, such as benefit, penalty, cost, and risk (each rated on a relative scale from a low of 1 to a high of 9).
#### 4.4.2 Secuencias de respuesta
List the sequences of user actions and system responses that stimulate the behavior defined for this feature. These will correspond to the dialog elements associated with use cases.
#### 4.4.3 Requerimientos
Itemize the detailed functional requirements associated with this feature. These are the software capabilities that must be present in order for the user to carry out the services provided by the feature, or to execute the use case. Include how the product should respond to anticipated error conditions or invalid inputs. Requirements should be concise, complete, unambiguous, verifiable, and necessary. Use “TBD” as a placeholder to indicate when necessary information is not yet available.

*(Each requirement should be uniquely identified with a sequence number or a meaningful tag of some kind.)*
<br>*REQ-1:*
<br>*REQ-2:*
## **5. Otros requerimientos no funcionales**
### 5.1. Requerimientos de rendimiento
El software debe ser capaz de estar funcional y servir a los usuarios de manera contínua durante el transcurso de todo el día, a través del año, con particular importancia mantener disponibilidad durante los horarios de clases, y en temporadas del año correspondientes a los exámenes finales e inscripción. El software debe ser capaz de manejar bajo el peso concurrente de multiples alumnos que usen el servicio, siendo capas de manejar a al menos 3000 usuarios concurrentemente, asegurando así su disponibilidad en los momentos mencionados de alto tráfico, donde un porcentaje considerable de las personas involucradas en el itam pueden requerir comunicarse.

### 5.2. Requerimientos de protección
Para migitar el riesgo de acciones contrarias al reglamento del ITAM llevadas a cabo por los usuarios que facilite el chat, se debe mantener un historial de mensajes de cada chat moderable; además se debe delinear claramente a los alumnos el propósito de uso del servicio, que queda limitado a actividades relacionadas con la educación en la escuela, para advertir contra usos que pueden implicar un riesgo de privacidad para los usuarios.

### 5.3. Requerimientos de seguridad
Se debe asegurar que el software solo sea utilizable por los alumnos, profesores, y personal administrativo del itam, contando por identificación preexistente que asigna el Instituto Tecnológico Autónomo de México. De este modo, se espera que el software sea capaz de autentificar el usuario con su cuenta correo del ITAM y correo correspondiente de manera segura encriptada. Además, el contenido de los chats deben guardarse de manera segura de manera que solo los usuarios en cada chat o cuentas asignadas con capacidades de moderación puedan ver su contenido, y se debe presentar de manera clara a los usuarios quién es capaz de ver los mensajes que manda.

### 5.4. Atributos de calidad de software
De las caracteristicas de calidad del software, las más relevantes, que afectan de mayor manera a las metas del software, son, en orden decreciente:
* Disponibilidad: Este software debe ser idealmente capaz de ser usado por cualquier usuario en cualquier momento, irrespectivo de dia, hora o nivel de tráfico
* Usabilidad: El software debe ser fácilmente comprehensible para los usuarios, tal que la comunicación entre los usuarios se facilite, con un interfaz que permita crear y entrar a chats de manera sencilla, quedando claro con quien se chatea.
* Portabilidad: El chat debe ser usable desde la mayoría de navegadores web que son usados por los usuarios, y desde una mayoría de los sistemas usados para acceder al chat, ya sean computadoras del plantel, computadoras propias de los usuarios, o dispositivos móbiles intelligentes.
* Mantenibilidad: El software debe ser capaz de soportar a chats por varios años, y mantener funcional y disponibles los mensajes mandados a lo largo del tiempo cuando se actualiza.

### 5.5. Reglas de Negocio
Todos los usuarios, alumnos, profesores y personas administrativas, tienen la capacidad de crear grupos de chat, pero solo los profesores podrán administrar los grupos especiales asignados por el software a cada clase. Los unicos usuarios que podrán acceder a los mensajes de chats en los que no fueron invitados son las cuentas de moderador especialmente avalados por el ITAM para esta función administrativa.

## **6. Otros requerimientos**
El software debe ser capaz de moderarse tal que la actividad llevada a cabo en ella cumpla con los reglamentos del ITAM, particularmente los referentes a código de conducta de los alumnos y sobre acoso, tal que se pueda llevar a cabo acción administrativa si es necesario.

## **Apéndice A: Glosario**
Define all the terms necessary to properly interpret the SRS, including acronyms and abbreviations. You may wish to build a separate glossary that spans multiple projects or the entire organization, and just include terms specific to a single project in each SRS.

## **Apéndice B: Modelos de análisis**
Optionally, include any pertinent analysis models, such as data flow diagrams, class diagrams, state-transition diagrams, or entity-relationship diagrams.

## **Apéndice C: Lista por determinar**
Collect a numbered list of the TBD (to be determined) references that remain in the SRS so they can be tracked to closure.
