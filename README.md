# Salesforce Design Subsystems Template

Hi, and welcome to the Salesforce Design Subsystems template repo.

## Intro

This template repository contains all of the boilerplate infrastructural setup you'll need to start building subsystems on top of 'SDS Core', the common foundation of the Salesforce Design System.

Packed with a pre-configured Storybook instance set up to support HTML & Web Components, this repo also comes with essential SDS dependencies, such as SDS Core itself\*, SDS Stylelint, and an example component to help you understand all the parts and pieces.

Remove the redundancies and get developing fast with this handy repo. Click the "Use this template" button to get started.

## Configuration

We've customized the Storybook Webpack configuration, which can be found under `.storybook/main.js`. We've done this in order to support proper loading of our web component files.

As you add new components, you'll need to register them with the Storybook instance by delcaring them in `.storybook/preview.js`. It's recommended to do this here, as opposed to declaring them in the component JS file itself, to allow for proper hot reloading behavior, as well as allow for cleaner separation of concerns.

## Coming Soon

As this project is in its early stages, its not yet complete. We expect to add the following functionality soon (among other features):

- SDS lint standards
- Jest testing scaffold
