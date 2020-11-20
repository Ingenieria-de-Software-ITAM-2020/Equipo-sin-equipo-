*Al menos 3 casos de uso por requerimiento*
# Software Requirements Specification
### para
# Project
#### Version 1.0 approved
#### Preparado por Bernardo Paniagua, Ricardo Alonso y Ricardo Edward
#### Equipo sin equipo
#### 11/27/20


## Tabla de Contendios
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
Identify the product whose software requirements are specified in this document, including the revision or release number. Describe the scope of the product that is covered by this SRS, particularly if this SRS describes only part of the system or a single subsystem.

### 1.2. Convenciones del documento
Describe any standards or typographical conventions that were followed when writing this SRS, such as fonts or highlighting that have special significance. For example, state whether priorities for higher-level requirements are assumed to be inherited by detailed requirements, or whether every requirement statement is to have its own priority.

### 1.3. Audiencia enfocada y sugerencias de lectura
Describe the different types of reader that the document is intended for, such as developers, project managers, marketing staff, users, testers, and documentation writers. Describe what the rest of this SRS contains and how it is organized. Suggest a sequence for reading the document, beginning with the overview sections and proceeding through the sections that are most pertinent to each reader type.

### 1.4. Alcance del producto
Provide a short description of the software being specified and its purpose, including relevant benefits, objectives, and goals. Relate the software to corporate goals or business strategies. If a separate vision and scope document is available, refer to it rather than duplicating its contents here.

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
Describe the logical characteristics of each interface between the software product and the users. This may include sample screen images, any GUI standards or product family style guides that are to be followed, screen layout constraints, standard buttons and functions (e.g., help) that will appear on every screen, keyboard shortcuts, error message display standards, and so on. Define the software components for which a user interface is needed. Details of the user interface design should be documented in a separate user interface specification.

### 3.2. Interfaces de hardware
Describe the logical and physical characteristics of each interface between the software product and the hardware components of the system. This may include the supported device types, the nature of the data and control interactions between the software and the hardware, and communication protocols to be used.

### 3.3. Interfaces de software
Describe the connections between this product and other specific software components (name and version), including databases, operating systems, tools, libraries, and integrated commercial components. Identify the data items or messages coming into the system and going out and describe the purpose of each. Describe the services needed and the nature of communications. Refer to documents that describe detailed application programming interface protocols. Identify data that will be shared across software components. If the data sharing mechanism must be implemented in a specific way (for example, use of a global data area in a multitasking operating system), specify this as an implementation constraint.

### 3.4. Interfaces de comunicación
Describe the requirements associated with any communications functions required by this product, including e-mail, web browser, network server communications protocols, electronic forms, and so on. Define any pertinent message formatting. Identify any communication standards that will be used, such as FTP or HTTP. Specify any communication security or encryption issues, data transfer rates, and synchronization mechanisms.

## **4. Funcionalidades del sistema**
*(This template illustrates organizing the functional requirements for the product by system features, the major services provided by the product. You may prefer to organize this section by use case, mode of operation, user class, object class, functional hierarchy, or combinations of these, whatever makes the most logical sense for your product.)*

### 4.1. System Feature 1
*(Don’t really say “System Feature 1.” State the feature name in just a few words.)*

#### 4.1.1 Descripción y prioridad
Provide a short description of the feature and indicate whether it is of High, Medium, or Low priority. You could also include specific priority component ratings, such as benefit, penalty, cost, and risk (each rated on a relative scale from a low of 1 to a high of 9).

#### 4.1.2 Secuencias de respuesta
List the sequences of user actions and system responses that stimulate the behavior defined for this feature. These will correspond to the dialog elements associated with use cases.

#### 4.1.3 Requerimientos
Itemize the detailed functional requirements associated with this feature. These are the software capabilities that must be present in order for the user to carry out the services provided by the feature, or to execute the use case. Include how the product should respond to anticipated error conditions or invalid inputs. Requirements should be concise, complete, unambiguous, verifiable, and necessary. Use “TBD” as a placeholder to indicate when necessary information is not yet available.

*(Each requirement should be uniquely identified with a sequence number or a meaningful tag of some kind.)*
<br>*REQ-1:*
<br>*REQ-2:*

### 4.2. System Feature 2
#### 4.2.1 Descripción y prioridad
#### 4.2.2 Secuencias de respuesta
#### 4.2.3 Requerimientos

### 4.3. System Feature 3
#### 4.3.1 Descripción y prioridad
#### 4.3.2 Secuencias de respuesta
#### 4.3.3 Requerimientos

## **5. Otros requerimientos no funcionales**
### 5.1. Requerimientos de rendimiento
If there are performance requirements for the product under various circumstances, state them here and explain their rationale, to help the developers understand the intent and make suitable design choices. Specify the timing relationships for real time systems. Make such requirements as specific as possible. You may need to state performance requirements for individual functional requirements or features.

### 5.2. Requerimientos de protección
Specify those requirements that are concerned with possible loss, damage, or harm that could result from the use of the product. Define any safeguards or actions that must be taken, as well as actions that must be prevented. Refer to any external policies or regulations that state safety issues that affect the product’s design or use. Define any safety certifications that must be satisfied.

### 5.3. Requerimientos de seguridad
Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product. Define any user identity authentication requirements. Refer to any external policies or regulations containing security issues that affect the product. Define any security or privacy certifications that must be satisfied.

### 5.4. Atributos de calidad de software
Specify any additional quality characteristics for the product that will be important to either the customers or the developers. Some to consider are: adaptability, availability, correctness, flexibility, interoperability, maintainability, portability, reliability, reusability, robustness, testability, and usability. Write these to be specific, quantitative, and verifiable when possible. At the least, clarify the relative preferences for various attributes, such as ease of use over ease of learning.

### 5.5. Reglas de Negocio
List any operating principles about the product, such as which individuals or roles can perform which functions under specific circumstances. These are not functional requirements in themselves, but they may imply certain functional requirements to enforce the rules.

## **6. Otros requerimientos**
Define any other requirements not covered elsewhere in the SRS. This might include database requirements, internationalization requirements, legal requirements, reuse objectives for the project, and so on. Add any new sections that are pertinent to the project.

## **Apéndice A: Glosario**
Define all the terms necessary to properly interpret the SRS, including acronyms and abbreviations. You may wish to build a separate glossary that spans multiple projects or the entire organization, and just include terms specific to a single project in each SRS.

## **Apéndice B: Modelos de análisis**
Optionally, include any pertinent analysis models, such as data flow diagrams, class diagrams, state-transition diagrams, or entity-relationship diagrams.

## **Apéndice C: Lista por determinar**
Collect a numbered list of the TBD (to be determined) references that remain in the SRS so they can be tracked to closure.
