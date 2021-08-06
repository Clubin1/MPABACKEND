/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
 const express = require('express')
 const app = express()

 const cloudinary = require('cloudinary').v2

 cloudinary.config({
     cloud_name: "dm5uxyi2s",
     api_key: "226518815717594",
     api_secret: "O5UlUZSr5xFchZ0Gb-g0wkEh21U"
 })


module.exports = {
    create: async (ctx) => {

        const {
            name,
            lastName,
            company,
            address,
            city,
            state,
            zip,
            phone,
            otherPhone,
            fax,
            email,
            website,
            specialties,
            treatmentOrientation,
            insuranceAccepted,
            treatmentModality,
            assessmentEvaluations,
            populationsServed,
            languages,
            imgurl,
            ps_url
        } = ctx.request.body
        ctx.request.body.ps_url = "123123123"
        // Register the order in the database
        const psychologist = await strapi.services.psychologist.create({

            name,
            lastName,
            company,
            address,
            city,
            state,
            zip,
            phone,
            otherPhone,
            fax,
            email,
            website,
            specialties,
            treatmentOrientation,
            insuranceAccepted,
            treatmentModality,
            assessmentEvaluations,
            populationsServed,
            languages,
            imgurl,   
            ps_url
        });

        return psychologist;
    }
};
