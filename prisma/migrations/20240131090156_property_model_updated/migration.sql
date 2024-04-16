/*
  Warnings:

  - You are about to drop the column `address` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `imageSrc` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `numberOfBaths` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `numberOfBedrooms` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerSeason` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `pricePerWeek` on the `Property` table. All the data in the column will be lost.
  - You are about to alter the column `availability` on the `Property` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - Added the required column `active` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avail` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bath` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedroom` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feature` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `halfbath` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highlight` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hlink` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img10` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img11` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img12` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img13` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img14` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img15` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img16` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img17` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img18` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img19` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img2` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img20` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img21` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img22` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img23` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img24` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img25` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img26` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img27` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img28` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img29` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img3` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img30` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img31` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img32` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img33` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img34` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img35` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img36` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img37` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img38` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img39` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img4` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img40` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img41` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img42` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img43` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img44` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img45` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img46` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img47` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img48` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img49` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img5` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img50` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img6` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img7` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img8` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img9` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location_type` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modify_date` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posn_idx` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_weekend` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prices` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricew` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prop_addr` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prop_city` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prop_state` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prop_zip` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `property_type` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rdist` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rooms` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rtime` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userid` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videolink` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Property` DROP COLUMN `address`,
    DROP COLUMN `imageSrc`,
    DROP COLUMN `numberOfBaths`,
    DROP COLUMN `numberOfBedrooms`,
    DROP COLUMN `pricePerSeason`,
    DROP COLUMN `pricePerWeek`,
    ADD COLUMN `active` VARCHAR(191) NOT NULL,
    ADD COLUMN `appl` VARCHAR(191) NULL,
    ADD COLUMN `avail` VARCHAR(191) NOT NULL,
    ADD COLUMN `bath` VARCHAR(191) NOT NULL,
    ADD COLUMN `bedroom` VARCHAR(191) NOT NULL,
    ADD COLUMN `create_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `details` VARCHAR(191) NULL,
    ADD COLUMN `feature` VARCHAR(191) NOT NULL,
    ADD COLUMN `halfbath` VARCHAR(191) NOT NULL,
    ADD COLUMN `highlight` INTEGER NOT NULL,
    ADD COLUMN `hlink` VARCHAR(191) NOT NULL,
    ADD COLUMN `img1` VARCHAR(191) NULL,
    ADD COLUMN `img10` VARCHAR(191) NOT NULL,
    ADD COLUMN `img11` VARCHAR(191) NOT NULL,
    ADD COLUMN `img12` VARCHAR(191) NOT NULL,
    ADD COLUMN `img13` VARCHAR(191) NOT NULL,
    ADD COLUMN `img14` VARCHAR(191) NOT NULL,
    ADD COLUMN `img15` VARCHAR(191) NOT NULL,
    ADD COLUMN `img16` VARCHAR(191) NOT NULL,
    ADD COLUMN `img17` VARCHAR(191) NOT NULL,
    ADD COLUMN `img18` VARCHAR(191) NOT NULL,
    ADD COLUMN `img19` VARCHAR(191) NOT NULL,
    ADD COLUMN `img2` VARCHAR(191) NOT NULL,
    ADD COLUMN `img20` VARCHAR(191) NOT NULL,
    ADD COLUMN `img21` VARCHAR(191) NOT NULL,
    ADD COLUMN `img22` VARCHAR(191) NOT NULL,
    ADD COLUMN `img23` VARCHAR(191) NOT NULL,
    ADD COLUMN `img24` VARCHAR(191) NOT NULL,
    ADD COLUMN `img25` VARCHAR(191) NOT NULL,
    ADD COLUMN `img26` VARCHAR(191) NOT NULL,
    ADD COLUMN `img27` VARCHAR(191) NOT NULL,
    ADD COLUMN `img28` VARCHAR(191) NOT NULL,
    ADD COLUMN `img29` VARCHAR(191) NOT NULL,
    ADD COLUMN `img3` VARCHAR(191) NOT NULL,
    ADD COLUMN `img30` VARCHAR(191) NOT NULL,
    ADD COLUMN `img31` VARCHAR(191) NOT NULL,
    ADD COLUMN `img32` VARCHAR(191) NOT NULL,
    ADD COLUMN `img33` VARCHAR(191) NOT NULL,
    ADD COLUMN `img34` VARCHAR(191) NOT NULL,
    ADD COLUMN `img35` VARCHAR(191) NOT NULL,
    ADD COLUMN `img36` VARCHAR(191) NOT NULL,
    ADD COLUMN `img37` VARCHAR(191) NOT NULL,
    ADD COLUMN `img38` VARCHAR(191) NOT NULL,
    ADD COLUMN `img39` VARCHAR(191) NOT NULL,
    ADD COLUMN `img4` VARCHAR(191) NOT NULL,
    ADD COLUMN `img40` VARCHAR(191) NOT NULL,
    ADD COLUMN `img41` VARCHAR(191) NOT NULL,
    ADD COLUMN `img42` VARCHAR(191) NOT NULL,
    ADD COLUMN `img43` VARCHAR(191) NOT NULL,
    ADD COLUMN `img44` VARCHAR(191) NOT NULL,
    ADD COLUMN `img45` VARCHAR(191) NOT NULL,
    ADD COLUMN `img46` VARCHAR(191) NOT NULL,
    ADD COLUMN `img47` VARCHAR(191) NOT NULL,
    ADD COLUMN `img48` VARCHAR(191) NOT NULL,
    ADD COLUMN `img49` VARCHAR(191) NOT NULL,
    ADD COLUMN `img5` VARCHAR(191) NOT NULL,
    ADD COLUMN `img50` VARCHAR(191) NOT NULL,
    ADD COLUMN `img6` VARCHAR(191) NOT NULL,
    ADD COLUMN `img7` VARCHAR(191) NOT NULL,
    ADD COLUMN `img8` VARCHAR(191) NOT NULL,
    ADD COLUMN `img9` VARCHAR(191) NOT NULL,
    ADD COLUMN `lat` VARCHAR(191) NULL,
    ADD COLUMN `lng` VARCHAR(191) NULL,
    ADD COLUMN `location_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `modify_date` DATETIME(3) NOT NULL,
    ADD COLUMN `posn_idx` INTEGER NOT NULL,
    ADD COLUMN `price_weekend` VARCHAR(191) NOT NULL,
    ADD COLUMN `prices` VARCHAR(191) NOT NULL,
    ADD COLUMN `pricew` VARCHAR(191) NOT NULL,
    ADD COLUMN `prop_addr` VARCHAR(191) NOT NULL,
    ADD COLUMN `prop_city` VARCHAR(191) NOT NULL,
    ADD COLUMN `prop_state` VARCHAR(191) NOT NULL,
    ADD COLUMN `prop_zip` VARCHAR(191) NOT NULL,
    ADD COLUMN `property_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `rdist` DOUBLE NOT NULL,
    ADD COLUMN `rooms` VARCHAR(191) NOT NULL,
    ADD COLUMN `rtime` DOUBLE NOT NULL,
    ADD COLUMN `sqft` VARCHAR(191) NULL,
    ADD COLUMN `userid` VARCHAR(191) NOT NULL,
    ADD COLUMN `videolink` VARCHAR(191) NOT NULL,
    MODIFY `availability` VARCHAR(191) NOT NULL;
