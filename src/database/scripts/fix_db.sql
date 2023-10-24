USE new_developers;

RENAME TABLE `company` TO `companies`;

ALTER TABLE `companies` DROP COLUMN `cant_employees`;

ALTER TABLE `employees` ADD COLUMN `company_id` int(11) NOT NULL;

SET SQL_SAFE_UPDATES = 0;

UPDATE `new_developers`.`employees`
SET
`company_id` = 1
WHERE `company_name` = 'CocaCola';

UPDATE `new_developers`.`employees`
SET
`company_id` = 2
WHERE `company_name` = 'Mercadolibre';

UPDATE `new_developers`.`employees`
SET
`company_id` = 3
WHERE `company_name` = 'Tesla';

UPDATE `new_developers`.`employees`
SET
`company_id` = 4
WHERE `company_name` = 'Ford';

ALTER TABLE `employees` DROP COLUMN `company_name`;

ALTER TABLE `employees`
ADD FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`);