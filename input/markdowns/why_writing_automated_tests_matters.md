Preface
=======

One of the peculiar tasks that programmers undertake is writing tests for the code they've written themselves. While it can sometimes be clear to the programmer what the output of their code should be. In this article, we examine the issue from various perspectives, aiming to make the idea of writing tests more palatable.

Using of a metaphor - Science and Mathematics
=============================================

The terms "science" and "mathematics" refer to distinct but related fields of study, each with its own set of principles, methods, and applications.Science is a systematic approach to understanding the natural world. It seeks to explain phenomena through observation, experimentation, and analysis, and uses a variety of tools and techniques to test hypotheses and develop theories. For instance relativity is a scientific theory, specifically, developed by Albert Einstein.

Mathematics, on the other hand, is a discipline that deals with abstract concepts such as numbers, quantities, structures, and patterns. It is concerned with logical reasoning and the development of precise models and algorithms. One example of a mathematical theory is the theory of calculus, which deals with the study of continuous change and is essential for understanding many fields such as physics, engineering, and economics.

Briefly mathematical theorems are proved by logical reasoning while scientific theories are proved by experiment. First one tries to establish the correctness of a relationship by abstract materials but second category(scientific theories) try to establish the correctness by real substances. Although the distinction may seem minor and philosophical, it is  so crucial.
[![image](/images/why_writing_automated_tests_matters/mathscience.gif)](/images/Why_writing_automated_tests_matters _in_software_development/mathscience.gif)

Science is concerned with the behavior of matter, including substances that we have yet to fully comprehend and model their behavior. Since we do not have a complete understanding of such substances, it is not possible to provide a definite statement about their behavior. Rather, experiments can only indicate the behavior of a substance under certain conditions. If we can show that something doesn't act the way we thought it would in a certain situation, then what we believed before might not be true. An example of this is Einstein's theory of relativity, which challenged Newton's laws in certain specific circumstances.

How is it related to the world of programming?
==============================================

**A piece of code is like a substance that needs experimentation, not like a mathematical equation.**

The actual behavior of a piece of code in a real-world environment is influenced by numerous factors, some of which are unknown and cannot be accounted for in the code itself.
[![image](/images/why_writing_automated_tests_matters/software_foundation.png)](/images/Why_writing_automated_tests_matters _in_software_development/software_foundation.png)

For instance, what can be done in our unit of code if a power failure occurs while the code is executing line 5? The conditions that the code encounters during its execution are countless and not all of them can be predicted or controlled, so it is not possible to consider every possible scenario. In other words, in running software, we are dealing with a real substance, not an abstract substance.Consequently, we understand that it is infeasible to demonstrate conclusively that our code is always correct. Instead, we can only use a scientific method to show that the code is not incorrect in a specific situation. These two perspectives are vastly distinct.It's noteworthy that individuals who are against writing tests often justify their position with the argument that "it's clear that the code is working correctly". However, it must be recognized that no code is guaranteed to work correctly in all scenarios. The only way to be persuaded to write tests is to accept this fact. If you want to verify that the code only functions properly in a specific situation, it's crucial to create tests for that piece of code to determine if it exhibits the desired behavior in a limited and specific context.

How test bring Self-explanatory Code
====================================

Writing tests binds the code to the requirements for which it was written. Tests state exactly what the code under test is written for. This makes it much easier to develop and maintain the system.

Think about codes in module X that are utilized in both module A and module B. If a programmer working on module A discovers an issue with module X and resolves it, how can they ensure that module B won't encounter any issues from the new changes? One solution is to re-test the functionality of module B. However, if there are already tests in place for module X, then the new changes should only pass those tests, ensuring the integrity of both modules.

[![image](/images/why_writing_automated_tests_matters/module_hierarchy.png)](/images/Why_writing_automated_tests_matters _in_software_development/module_hierarchy.png)

To put it another way, test cases are the most valuable documentation for code and allow for a quick and efficient evaluation of its function and accuracy.

When should we write tests?
===========================

Think of writing code as creating a new material. As previously stated, it's not possible to anticipate all of the code's behavior. The goal is to ensure that the material is suitable for our needs. To do this, limited tests must be conducted to confirm that the material performs as expected under certain conditions. The creation of these tests necessitates a solid understanding of the requirements and a general comprehension of the code's purpose in fulfilling those requirements.Although our code may fulfill specific and limited requirements, it's possible that it implements a useless feature that is more than what it is supposed to be, or that code structure may not be fit for the requirement. Hence, it's advisable to specify test cases, prior to writing code, what tests it should pass, meaning what tests should be used to verify the code's correctness.

Designing tests before writing code can be time-consuming, but it allows for a more focused and efficient outcome without additional effort. Furthermore, as we consider the design of the tests, we can better break down the code into smaller pieces, making the tests easier to create. Most importantly, this approach prevents the code from becoming overly general and lacking purpose.

[![image](/images/why_writing_automated_tests_matters/test_first.png)](/images/Why_writing_automated_tests_matters _in_software_development/test_first.png)

The choice between a test-first or test-last approach depends on the specific project conditions. In data-driven projects, where a majority of the code involves storing and retrieving data, the test-first approach becomes less crucial as the structures of the program are already established and the logic of the program is centered around validation of input data.However, in domain-driven programs where the logic is more complex and diverse, the benefits of a test-first approach become more prominent. The behaviors of the domain layer models that contain the application logic are the best place to test the logic, and they should pass our intended tests accurately.

How should tests be designed?
=============================

The breadth of software that is included in the automated tests impacts the speed and complexity of the tests. The scope of testing can be as narrow as evaluating a single function (known as a unit test) or as broad as assessing the overall performance of the system by replicating user interactions (known as end-to-end testing or E2E).

[![image](/images/why_writing_automated_tests_matters/test_layers.png)](/images/Why_writing_automated_tests_matters _in_software_development/test_layers.png)

Unit tests have a narrower scope and do not rely on actual software dependencies. Instead, these dependencies are often simulated, which enables faster implementation and execution of the tests. However, a larger number of unit tests are needed to cover a wide range of scenarios. On the other hand, when tests cover a broader range, they require real dependencies of the program, such as databases or web services, which results in slower implementation and execution of the tests. Despite the slower speed, the advantage of these tests is that they cover a wider range of scenarios.

It is crucial to strike the right balance between the speed and quantity of tests when designing them. The guiding principle is to ensure that the unit tests evaluate a significant portion of the system's functionality, wherever possible. If the software does not allow this possibility, then it is advisable to re-evaluate the structure of the software. The design of the software architecture can have a direct influence on the precision of the tests, which highlights the importance of adopting a test-first approach.

Conclusion
==========

If we want to summarize the whole article in one phrase, those phrases are "no piece of code always works correctly". 

Our code must be designed to work correctly in specific situations and environments. It is essential to determine the conditions under which our code will perform as intended.

Writing tests are the best documentation and explanation for extending and maintaining the code.

In some cases, creating test cases before writing the code helps to concentrate on the core issue and steer clear of unproductive matters.

Maturity of software functionality must be tested by unit-tests as much as possible. To do this the structure of the software should let you put business logic in units that are not tightly dependent on real software dependencies.