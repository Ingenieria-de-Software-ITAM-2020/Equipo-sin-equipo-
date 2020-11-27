# **Plan de Calidad**<br>*(IEEE 829 FORMAT)*

## **TABLA DE CONTENDIOS**
[**Tabla de Contendios**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#tabla-de-contendios)
1. [**Identificador del plan de prueba**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#1-identificador-del-plan-de-prueba)
2. [**Referencias**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#2-referencias)
3. [**Introducción**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#3-introducci%C3%B3n)
4. [**Elementos de prueba**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#4-elementos-de-prueba-funciones)
5. [**Problemas de riesgo de software**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#5-problemas-de-riesgo-de-software)
6. [**Funciones a probar**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#6-funciones-a-probar)
7. [**Funciones que no deben probarse**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#7-funciones-que-no-deben-probarse)
8. [**Accercamiento**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#8-accercamiento-estrategia)
9. [**Criterios de aprobación/falla**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#9-criterios-de-aprobaci%C3%B3nfalla)
10. [**Criterios de suspensión y requisitos de reanudación**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#10-criterios-de-suspensi%C3%B3n-y-requisitos-de-reanudaci%C3%B3n)
11. [**Entregables de prueba**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#11-entregables-de-prueba)
12. [**Tareas de prueba restantes**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#12-tareas-de-prueba-restantes)
13. [**Necesidades del entorno**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#13-necesidades-del-entorno)
14. [**Necesidades de personal y capacitación**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#14-necesidades-de-personal-y-capacitaci%C3%B3n)
15. [**Responsibilities**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#15-responsibilities)
16. [**Programa**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#16-programa)
17. [**Planificación de riesgos y contingencias**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#17-planificaci%C3%B3n-de-riesgos-y-contingencias)
18. [**Aprobaciones**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#18-aprobaciones)
19. [**Glosario**](https://github.com/Ingenieria-de-Software-ITAM-2020/Equipo-sin-equipo-/blob/main/Plan%20de%20calidad.md#19-glosario)

## **1. IDENTIFICADOR DEL PLAN DE PRUEBA**
*Some type of unique company generated number to identify this test plan, its level and the level of software that it is related to.  Preferably the test plan level will be the same as the related software level.  The number may also identify whether the test plan is a Master plan, a Level plan, an integration plan or whichever plan level it represents. This is to assist in coordinating software and testware versions within configuration management.*

*Keep in mind that test plans are like other software documentation, they are dynamic in nature and must be kept up to date.  Therefore, they will have revision numbers.*

*You may want to include author and contact information including the revision history information as part of either the identifier section of as part of the introduction.*

## **2. REFERENCIAS**

Software Requierments Specification, anexo a este documento.

## **3. INTRODUCCIÓN**
Este es el plan maestro de pruebas para el proyecto de chat para alumnos del ITAM. Este plan cubrirá los elementos afectados directa e indirectamente. El objetivo principal es garantizar que la aplicación proporcione un buen sistema de comunicación para los alumnos, ya sea entre ellos o con los maestros o profesores. El plazo estimado para este proyecto es de seis (6) meses. Se espera que la prueba de aceptación tome un (1) mes a partir de la fecha de entrega.

## **4. ELEMENTOS DE PRUEBA (FUNCIONES)**

* El acceso con la cuenta del ITAM
* La creación manual de salas
* La creación automática de salas
* Que el menú de asistencia administrativa tenga todas las áreas necesarias
* La creación de salas con miembros del personal administrativo

## **5. PROBLEMAS DE RIESGO DE SOFTWARE**
Hay varias partes del proyecto que no están bajo el control de la aplicación pero que tienen un impacto directo en el proceso y también deben probarse.
* La incorporación a las plataformas del ITAM, su acceso y el comportamiento en conjutno con la aplicación.
* Compatibilidad con una gran variedad de navegadores y dispositivos.rrectos.
* El acceso a la base de datos para el uso de las cuentas ya existentes de los alumnos, su funcionamiento y su disponibilidad.
* La seguridad de la base de datos de alumnos y maestros del ITAM.
* El comportamiento del servicio cuando el resto de plataformas del ITAM caen o no funcionan correctamente.

## **6. FUNCIONES A PROBAR**
* La autentificación con la cuenta ITAM: Para garantizar la seguridad y privacidad de lxs usuarixs, solo los membros activos de la comunidad pueden entrar al sistema; de lo contrario, personas externas podrían enviar mensajes maliciosos a los miembros. Tiene riesgo alto.

* La creación de salas personalizadas: Debe asegurarse que lxs alumnxs puedan crear salas con otrxs alumnxs y/o profesorxes, pero no con miembros del personal administrativo, y que una persona entre a la sala solo si acepta la invitación. Tiene riesgo medio.

* La creación de salas por grupo: Principalmente, estas deben meter a todxs lxs alumnxs inscritos en el grupo que les corresponda, y no meter a otras personas. Además, deben borrarse automáticamente al finalizar el curso. Tiene riesgo bajo.

* La creación de salas con miembros del personal administrativo: Debido a que no hay otra forma de hacer estas salas, se debe asegurar que se hagan automáticamente cada que se solicitan. Tiene riesgo bajo.

## **7. FUNCIONES QUE NO DEBEN PROBARSE**

La validez de las cuentas ITAM para el log in debe ser garantizado por la institución, por lo que no necesita ser probado.

## **8. ACCERCAMIENTO (ESTRATEGIA)**
La estrategia de prueba para el software será enfocado en pruebas de alto nivel que analizen el funcionamiento a nivel sistema del software en diversos entornos que reflejen posibles entornos de uso futuros. No se usarán herraientas computacionales especiales para llevar a cabo análisis, más que la determinación de uso de memoria y tiempo de ejecución de comandos en el hardware que se usará para simular el funcionamiento que se tendrá en los servidores de la institución. El servidor será probado en una configuración que refleje los esperados límites de hardware y software del servidor en que será implementdo, mientras que el funcionamiento a lado de cliente deberá ser probado en una multiplicidad de configuraciones; como mínimo, probandose en las computadoras presentes en el plantel de institución, computadoras personales,  y dispositivos móviles, perferentemente usando los diferentes sitemas operativos comúnes: Windows, macOS, Linux, Android y iOS. Similarmente, deberá ser accedido para probarse en una multiplicidad de navegadores móviles, usando como mínimo Google Chrome, Microsoft Edge, Firefox y Safari.

Para las métricas de evaluación, se considerará el tiempo medio entre fallas, a nivel general entre todas las pruebas, considerando que errores ocurren en la lógica del servidor, y particular para cada sistema operativo, navegador, y combinación entre ellas que usa el cliente, para identificar las principales faltas en la compatibilidad con posibles casos de uso del usuario. Además, se harán pruebas de estrés simulando una alta cantidad de clientes haciendo operaciones de mensajeo simultáneamente para obtener métricas cuantitativas del tiempo de operaciones y memoria usada bajo alto tráfico, y determinar si estarán en niveles suficientemente bajos para generar una experiencia de usuario acceptable en casos extremos de uso previsto.

## **9. CRITERIOS DE APROBACIÓN/FALLA**
El proceso de prueba se completará una vez que el conjunto inicial de pruebas se hayan realizado con éxito y el personal del instituto esté satisfecho y seguro de que se cumplen con los requerimentos mínimos para el proposito de la aplicación. En ese momento la aplicación se considera activa.

## **10. CRITERIOS DE SUSPENSIÓN Y REQUISITOS DE REANUDACIÓN**
* Falta de disponibildad de los servidores y bases de datos del ITAM, el proceso se reanudara, una vez estas sean accesibles y esten funcioando normalmente.
* Fallas en la seguridad de la aplicación. En el caso de encontrarse una brecha en la seguridad de la aplicación se procedera a repararla  a la brevedad, antes de resumir el proceso.

## **11. ENTREGABLES DE PRUEBA**

* Plan de calidad
* Vista de las lasas cradas en las pruebas
* Simulación de un proceso administrativo
* Pantallas de error
* Reporte de problemas generales

## **12. TAREAS DE PRUEBA RESTANTES**
Se espera que este software sea implementado a los servidores del Instituto Tecnológico Autónomo de México ya contando con una funcionalidad completa, por lo que este plan de calidad se usará para probar la correcta implementación de todos los elementos actualmente considerados para el software, de donde se probará asumiendo que los usuarios no deberán evitar funciones incompletas.


## **13. NECESIDADES DEL ENTORNO**
Los siguientes elementos son necesarios para las pruebas generales en todos los casos:
* Un dispositivo electrónico con navegador web y conexión a internet.
* Un navegador web actualizado hasta su última versión de preferencia (a menos que se este probando su funcionamiento en versiones anteriores).
* Una cuenta vigente del ITAM.

## **14. NECESIDADES DE PERSONAL Y CAPACITACIÓN**

No se requiere capacitación para utilizar el sistema como usuario común, ya que debe ser lo más intuitivo posible. Los moderadores de información deberán entender el reglamento del ITAM como miembros administrativos de la institución para efectuar correctamente el mantenimiento del código de conducta, pero no requerirán de conocimientos técnicos para desempeñar los roles.

## **15. RESPONSIBILITIES**

El sistema debe tener un administrador, que se encargará de verificar que no haya problemas. El principal riesgo que se tiene es la entrada de terceros al sistema, por lo que debe verificarse con mucho cuidado el log in.
Además, cualquier caso de acoso deberá ser reportado directamente a las autoridades correspondientes.

## **16. PROGRAMA**
*Should be based on realistic and validated estimates.  If the estimates for the development of the application are inaccurate, the entire project plan will slip and the testing is part of the overall project plan.*

* As we all know, the first area of a project plan to get cut when it comes to crunch time at the end of a project is the testing.  It usually comes down to the decision, ‘Let’s put something out even if it does not really work all that well’. And, as we all know, this is usually the worst possible decision.

*How slippage in the schedule will to be handled should also be addressed here.*

* If the users know in advance that a slippage in the development will cause a slippage in the test and the overall delivery of the system, they just may be a little more tolerant, if they know it’s in their interest to get a better tested application.
* By spelling out the effects here you have a chance to discuss them in advance of their actual occurrence. You may even get the users to agree to a few defects in advance, if the schedule slips.

*At this point, all relevant milestones should be identified with their relationship to the development process identified.  This will also help in identifying and tracking potential slippage in the schedule caused by the test process.*

*It is always best to tie all test dates directly to their related development activity dates.  This prevents the test team from being perceived as the cause of a delay.  For example, if system testing is to begin after delivery of the final build, then system testing begins the day after delivery.  If the delivery is late, system testing starts from the day of delivery, not on a specific date.  This is called dependent or relative dating.*

## **17. PLANIFICACIÓN DE RIESGOS Y CONTINGENCIAS**
*What are the overall risks to the project with an emphasis on the testing process?*

* Lack of personnel resources when testing is to begin.
* Lack of availability of required hardware, software, data or tools.
* Late delivery of the software, hardware or tools.
* Delays in training on the application and/or tools.
* Changes to the original requirements or designs.

*Specify what will be done for various events, for example:*

* Requirements definition will be complete by January 1, 19XX, and, if the requirements change after that date, the following actions will be taken.
    * The test schedule and development schedule will move out an appropriate number of days.  This rarely occurs, as most projects tend to have fixed delivery dates.
    * The number of test performed will be reduced.
    * The number of acceptable defects will be increased.
        * These two items could lower the overall quality of the delivered product.
    * Resources will be added to the test team.
    * The test team will work overtime.
        * This could affect team morale.
    * The scope of the plan may be changed.
    * There may be some optimization of resources.  This should be avoided, if possible, for obvious reasons.
    * You could just QUIT.  A rather extreme option to say the least.

*Management is usually reluctant to accept scenarios such as the one above even though they have seen it happen in the past.*

*The important thing to remember is that, if you do nothing at all, the usual result is that testing is cut back or omitted completely, neither of which should be an acceptable option.*

## **18. APROBACIONES**
El coordinador del proyecto deberá verificar con la administración de la institución, particularmente con el director del departamento de computación, que las todas funcionalidades esten implementadas correctamente y sean utilizables en acuerdo con este plan de calidad, para que se pueda implementar el software en los servidores del ITAM.
