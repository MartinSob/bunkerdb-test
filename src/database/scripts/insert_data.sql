USE new_developers;

INSERT INTO `new_developers`.`company`
(`id`, `name`, `country`, `cant_employees`)
VALUES (1, 'CocaCola', 'UY', 3);

INSERT INTO `new_developers`.`company`
(`id`, `name`, `country`, `cant_employees`)
VALUES (2, 'Mercadolibre', 'UY', 1);

INSERT INTO `new_developers`.`company`
(`id`, `name`, `country`, `cant_employees`)
VALUES (3, 'Tesla', 'AR', 1);

INSERT INTO `new_developers`.`company`
(`id`, `name`, `country`, `cant_employees`)
VALUES (4, 'Ford', 'BR', 1);

INSERT INTO `new_developers`.`employees`
(`id`, `company_name`, `document_number`, `first_name`, `last_name`, `date_admission`)
VALUES
(1, 'CocaCola', 111, 'Onename', 'Onelastname', '2018-12-09');

INSERT INTO `new_developers`.`employees`
(`id`, `company_name`, `document_number`, `first_name`, `last_name`, `date_admission`)
VALUES
(2, 'CocaCola', 222, 'Twoname', 'Twolastname', '2018-12-09');

INSERT INTO `new_developers`.`employees`
(`id`, `company_name`, `document_number`, `first_name`, `last_name`, `date_admission`)
VALUES
(3, 'CocaCola', 333, 'Threename', 'Threelastname', '2018-12-09');

INSERT INTO `new_developers`.`employees`
(`id`, `company_name`, `document_number`, `first_name`, `last_name`, `date_admission`)
VALUES
(4, 'Mercadolibre', 444, 'Fourname', 'Fourlastname', '2018-12-09');

INSERT INTO `new_developers`.`employees`
(`id`, `company_name`, `document_number`, `first_name`, `last_name`, `date_admission`)
VALUES
(5, 'Tesla', 555, 'Fivename', 'Fivelastname', '2018-12-09');

INSERT INTO `new_developers`.`employees`
(`id`, `company_name`, `document_number`, `first_name`, `last_name`, `date_admission`)
VALUES
(6, 'Ford', 666, 'Sixname', 'Sixlastname', '2018-12-09');